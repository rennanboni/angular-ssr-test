import { Component } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Page 2 -  Home page of SEO friendly app'},
      {name: 'author', content: 'Page 2 - Rennan'},
      {name: 'keywords', content: 'Page 2 - Angular, ButterCMS'}
    ]);
    this.title.setTitle('Angular - Page 2');
  }
}
