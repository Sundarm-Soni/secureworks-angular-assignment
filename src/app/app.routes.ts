import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./components/friends/friends.component').then(
        (mod) => mod.FriendsComponent
      ),
    pathMatch: 'full'
  },
  {
    path: 'friends',
    loadComponent: () =>
      import('./components/friends/friends.component').then(
        (mod) => mod.FriendsComponent
      ),
  },
  {
    path: 'friends-display',
    loadComponent: () =>
      import('./components/friends-display/friends-display.component').then(
        (mod) => mod.FriendsDisplayComponent
      ),
  },
];
