import {NgModule} from '@angular/core';
import {MainPageComponent} from './main-page.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FirstTaskComponent} from './first-task/first-task.component';
import {SecondTaskComponent} from './second-task/second-task.component';
import {AuthGuard} from '../auth.guard';
import {FirstTaskLowComponent} from './first-task-low/first-task-low.component';
import {FirstTaskHighComponent} from './first-task-high/first-task-high.component';
import {DataService} from './data.service';
import {ThirdTaskComponent} from '../third-task/third-task.component';
import {ButtonComponent} from '../third-task/button/button.component';
import {MenuBlockComponent} from '../third-task/menu-block/menu-block.component';
import {StatBlockComponent} from '../third-task/stat-block/stat-block.component';
import {SectionComponent} from '../third-task/section/section.component';
import {TaskComponent} from '../third-task/task/task.component';
import {PostComponent} from '../third-task/post/post.component';
import {SectionService} from '../third-task/section/section.service';
import {AppService} from '../third-task/services/app.service';
import {StatBlockService} from '../third-task/stat-block/stat-block.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    MainPageComponent,
    FirstTaskLowComponent,
    FirstTaskComponent,
    FirstTaskHighComponent,
    SecondTaskComponent,
    ThirdTaskComponent,

    ButtonComponent,
    MenuBlockComponent,
    PostComponent,
    TaskComponent,
    SectionComponent,
    StatBlockComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: MainPageComponent, canActivate: [AuthGuard]
        , children: [
          {path: 'first-low', component: FirstTaskLowComponent},
          {path: 'first-medium', component: FirstTaskComponent},
          {path: 'first-high', component: FirstTaskHighComponent},
          {path: 'second', component: SecondTaskComponent},
          {path: 'third', component: ThirdTaskComponent},
        ]
      }
    ]),
    FormsModule
  ],
  providers: [DataService,
    SectionService,
    AppService,
    StatBlockService
  ],
  bootstrap: [MainPageComponent]
})
export class mainPageModule {
}
