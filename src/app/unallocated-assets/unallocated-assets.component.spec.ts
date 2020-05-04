import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnallocatedAssetsComponent } from './unallocated-assets.component';

describe('UnallocatedAssetsComponent', () => {
  let component: UnallocatedAssetsComponent;
  let fixture: ComponentFixture<UnallocatedAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnallocatedAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnallocatedAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
