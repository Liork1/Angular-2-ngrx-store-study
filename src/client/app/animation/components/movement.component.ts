import { 
    Component, OnChanges, Input, 
    trigger, state, animate, transition, style 
} from '@angular/core';

@Component({
   moduleId: module.id,
  selector : 'movement',
  templateUrl: 'movement.component.html',
  stylesUrl: ['movement.component.css'],
  animations: [
    trigger('movementtrigger', [
      state('firstpos', style({transform: 'translateX(0)'})),
      state('secondpos', style({transform: 'translateX(10%)'})),
      transition('firstpos => secondpos', [
        animate('200ms ease-in')
      ]),
      transition('secondpos => firstpos', [
        animate('200ms ease-out')
      ])
    ])
  ],
})

export class MovementComponent {
  @Input() state: string = 'firstpos';
}
