import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'secureworks-friends-display',
  templateUrl: './friends-display.component.html',
  styleUrl: './friends-display.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendsDisplayComponent {
}
