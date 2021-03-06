import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AngularTopicsModule } from './angular-topics/angular-topics.module';
import { AngularTopicsComponent } from './angular-topics/angular-topics.component';

const routes: Routes = [
  { 
    path: '',  component: AngularTopicsComponent
  },
  { path: 'rxjs', loadChildren: () => import('./rxjs-learning/rxjs-learning.module').then(m => m.RxjsLearningModule) },
  { path: 'angular', loadChildren: () => import('./angular-topics/angular-topics.module').then(m => m.AngularTopicsModule) },
  { path: 'componentinteraction', loadChildren: () => import('./angular-topics/componentinteraction/componentinteraction.module').then(m => m.ComponentinteractionModule) },
  { path: 'crud', loadChildren: () => import('./angular-topics/crudexample/crudexample.module').then(m => m.CrudexampleModule) }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
