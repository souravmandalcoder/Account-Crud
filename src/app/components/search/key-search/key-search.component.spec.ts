import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeySearchComponent } from './key-search.component';

describe('KeySearchComponent', () => {
  let component: KeySearchComponent;
  let fixture: ComponentFixture<KeySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeySearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
