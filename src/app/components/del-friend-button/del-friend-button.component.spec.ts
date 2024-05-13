import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelFriendButtonComponent } from './del-friend-button.component';

describe('DelFriendButtonComponent', () => {
  let component: DelFriendButtonComponent;
  let fixture: ComponentFixture<DelFriendButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelFriendButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelFriendButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
