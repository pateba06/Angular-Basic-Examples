import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from './crudservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crudexample',
  templateUrl: './crudexample.component.html',
  styleUrls: ['./crudexample.component.css']
})
export class CrudexampleComponent implements OnInit {

  allUserObj:{};
  // creating this userObj for edit..and we will do two way data binding using [(ngModel)]
  userObj={
    user:'',
    mobile:'',
    email:'',
    password:'',
    id:''
  }

  isEdit = false;
  constructor(private crudService:CrudserviceService) { }

  ngOnInit(): void {
    this.getLatestData()
  }
  
  /**
   * This method will add data into data base.
   * we also calling getLatestuser() it will display all the data in table from the json
   * @param formObj 
   */
  addUser(formObj){
    this.crudService.createUser(formObj).subscribe((res)=>{
      // console.log("User has been added")
    this.getLatestData();  
    })
  }

  /**
   * This method we are calling to display all the data present in the method
   */
  getLatestData(){
    this.crudService.getAllUser().subscribe((res)=>{

      this.allUserObj = res;
      console.log(this.allUserObj)
    })
  }

  /**
   * with below function we will be able to edit user info
   * for this we created userObj above
   * then did two way data binding [(ngModel)]
   */
  editUser(user){
    this.isEdit = true;
    this.userObj = user;
  
  }

  /**
   * 
   */
  deleteUser(user){
    this.crudService.deleteUser(user).subscribe(()=>{
      this.getLatestData()
    })
  }

  updateUser(){
    this.isEdit = !this.isEdit;
    this.crudService.updateUser(this.userObj).subscribe(()=>{
      // updating the latest obj
      this.getLatestData()
    })
  }
}
