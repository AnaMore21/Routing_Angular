import { Component } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('moveInLeft', [
      transition('void=> *', [style({transform: 'translateX(300px)'}),
        animate('200ms ease-out', keyframes([
          style({transform: 'translateX(300px)'}),
          style({transform: 'translateX(0)'})

        ]))]),
      transition('*=>void', [style({transform: 'translateX(0px)'}),
        animate('250ms ease-in',   keyframes([
          style({transform: 'translateY(-20px)', opacity: 1, offset: 0.2}),
          style({transform: 'translateY(250px)', opacity: 0 , offset: 1})

        ]))])
    ])
  ]
})
export class AppComponent {
  title = 'my-routing-app1';
}
