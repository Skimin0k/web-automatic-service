import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormComponent} from './form/form.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
    {path: '', component: FormComponent},
    {path: 'main', loadChildren: () => import('./main-page/mainPage.module').then(m => m.mainPageModule)},
  ])],
  exports: [RouterModule],
})

export class AppRoutingModule {}
