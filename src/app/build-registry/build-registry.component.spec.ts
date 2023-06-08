import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildRegistryComponent } from './build-registry.component';

describe('BuildRegistryComponent', () => {
  let component: BuildRegistryComponent;
  let fixture: ComponentFixture<BuildRegistryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildRegistryComponent]
    });
    fixture = TestBed.createComponent(BuildRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
