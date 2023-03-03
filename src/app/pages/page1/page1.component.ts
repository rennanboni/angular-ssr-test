import {Component} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Page - 1 Home page of SEO friendly app'},
      {name: 'author', content: 'Page 1 - Rennan'},
      {name: 'keywords', content: 'Page 1 - Angular, ButterCMS'}
    ]);
    this.title.setTitle('Angular - Page 1');
  }

}
