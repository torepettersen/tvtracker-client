import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <navbar></navbar>
    <div class="outlet">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';
}
