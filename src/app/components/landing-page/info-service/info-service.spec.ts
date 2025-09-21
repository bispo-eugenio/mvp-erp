import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoService } from './info-service';

describe('InfoService', () => {
  let component: InfoService;
  let fixture: ComponentFixture<InfoService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
