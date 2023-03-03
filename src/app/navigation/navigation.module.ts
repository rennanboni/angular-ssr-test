import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationComponent} from "./navigation.component";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import { Page2Component } from '../pages/page2/page2.component';
import {Page1Module} from "../pages/page1/page1.module";

@NgModule({
  declarations: [NavigationComponent, Page2Component],
  imports: [
    // Common
    CommonModule,
    RouterModule,

    // Material
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    // Pages
    Page1Module
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
