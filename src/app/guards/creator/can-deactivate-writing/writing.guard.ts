import { CanActivateFn } from '@angular/router';

export const writingGuard: CanActivateFn = (route, state) => {
  return false;
};
