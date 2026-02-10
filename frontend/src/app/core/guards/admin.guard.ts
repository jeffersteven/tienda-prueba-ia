import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const isAdmin = // logic to determine if the user is an admin;

  if (!isAdmin) {
    // Redirect to an unauthorized access page or home
    return false;
  }

  return true;
};
