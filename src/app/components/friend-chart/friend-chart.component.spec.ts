import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendChartComponent } from './friend-chart.component';

describe('FriendChartComponent', () => {
  let component: FriendChartComponent;
  let fixture: ComponentFixture<FriendChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FriendChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
