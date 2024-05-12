import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FriendsComponent } from './components/friends/friends.component';
import { FriendsDisplayComponent } from './components/friends-display/friends-display.component';
import { NavigationComponent } from './shared/Layouts/navigation/navigation.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    FriendsComponent,
    FriendsDisplayComponent,
    NavigationComponent,
  ],
  selector: 'secureworks-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
