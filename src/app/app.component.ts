import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';
}
