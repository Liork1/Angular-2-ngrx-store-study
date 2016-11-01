import { Route } from '@angular/router';
import * as fromAnimation from './components/animation.component';

export const AnimationRoutes: Route[] = [
  {
    path: 'animation',
    component: fromAnimation.AnimationComponent
  }
];
