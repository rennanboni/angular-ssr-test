import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import {Page2Component} from "./page2.component";
import {LayoutModule} from "@angular/cdk/layout";

@NgModule({
  declarations: [Page2Component],
  imports: [
    // Common
    CommonModule,
    RouterModule,

    // Material
    LayoutModule,
    FlexLayoutModule,
  ],
  exports: [Page2Component]
})
export class Page2Module { }
