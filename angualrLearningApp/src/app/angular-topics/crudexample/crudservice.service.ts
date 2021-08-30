import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

constructor(private _http:HttpClient) { }

// CreateUser
createUser(user){
  return this._http.post("http://localhost:3000/users",user)
}
// ReadUser by getAllUser
getAllUser (){
  return this._http.get("http://localhost:3000/users")
}
// deletUser --we will specify id so it will delete specific userid
deleteUser(user){
  return this._http.delete("http://localhost:3000/users/" + user.id)
}
// update user
updateUser(user){
  return this._http.put("http://localhost:3000/users/" + user.id ,user)
}
}
