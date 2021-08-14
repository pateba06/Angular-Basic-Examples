import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentinteractionComponent } from './componentinteraction.component';

const routes: Routes = [
  { path: '', component: ComponentinteractionComponent },
  {
    path: 'interactionobservableexample',
    loadChildren: () =>
      import(
        './interaction-using-observable/interaction-using-observable.module'
      ).then((m) => m.InteractionUsingObservableModule),
  },
  {
    path: 'parenttochild',
    loadChildren: () =>
      import('./parenttochild/parenttochild.module').then(
        (m) => m.ParenttochildModule
      ),
  },
  { path: 'childtoparent', loadChildren: () => import('./childtoparent/childtoparent.module').then(m => m.ChildtoparentModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentinteractionRoutingModule {}
