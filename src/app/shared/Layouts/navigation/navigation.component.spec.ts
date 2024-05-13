import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MockModule } from 'ng-mocks';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationComponent } from './navigation.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      imports: [MockModule(MatToolbarModule), MockModule(RouterTestingModule)],
      declarations: [NavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
