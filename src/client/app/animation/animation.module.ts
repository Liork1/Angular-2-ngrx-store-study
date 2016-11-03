import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationComponent } from './components/animation.component';
import { FaderComponent } from './components/my-fader.component';
import { MovementComponent } from './components/movement.component';

@NgModule({
    imports: [CommonModule],
    providers: [],
    declarations: [AnimationComponent, FaderComponent, MovementComponent],
    exports: [AnimationComponent],
})
export class AnimationModule { }
