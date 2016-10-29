import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { AuthNgrxRoutes } from './auth-ngrx/index';
import { TestRoutes } from './test/index';
import { FormTemplateDrivenRoutes } from './form-template-driven/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...AuthNgrxRoutes,
  ...TestRoutes,
  ...FormTemplateDrivenRoutes
];
