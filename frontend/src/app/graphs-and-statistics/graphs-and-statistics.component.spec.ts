import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsAndStatisticsComponent } from './graphs-and-statistics.component';

describe('GraphsAndStatisticsComponent', () => {
  let component: GraphsAndStatisticsComponent;
  let fixture: ComponentFixture<GraphsAndStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphsAndStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphsAndStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
