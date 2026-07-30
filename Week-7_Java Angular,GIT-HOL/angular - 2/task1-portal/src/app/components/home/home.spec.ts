import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct initial portalName', () => {
    expect(component.portalName).toBe('Student Course Portal');
  });

  it('should update message on enroll click', () => {
    component.onEnrollClick();
    expect(component.message).toBe('Enrollment opened!');
  });
});
