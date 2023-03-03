import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigationComponent} from "./navigation/navigation.component";
import {Page1Component} from "./pages/page1/page1.component";
import {Page2Component} from "./pages/page2/page2.component";

const routes: Routes = [
  {
    path: '', component: NavigationComponent,
    children: [
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
