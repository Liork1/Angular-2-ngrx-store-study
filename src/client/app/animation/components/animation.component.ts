import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from '../../shared/store';

@Component({
    moduleId: module.id,
    selector: 'animation',
    templateUrl: 'animation.component.html',
    styleUrls: ['animation.component.css'],
})
export class AnimationComponent{
  
    showFader : boolean = true;
    movementState: string = 'firstpos';
}