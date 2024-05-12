import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  standalone: true,
  imports: [RouterModule, MatToolbarModule],
  selector: 'secureworks-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
}
