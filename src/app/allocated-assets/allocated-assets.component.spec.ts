import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatedAssetsComponent } from './allocated-assets.component';

describe('AllocatedAssetsComponent', () => {
  let component: AllocatedAssetsComponent;
  let fixture: ComponentFixture<AllocatedAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocatedAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocatedAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
