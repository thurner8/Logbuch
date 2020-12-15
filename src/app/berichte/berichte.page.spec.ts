import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BerichtePage } from './berichte.page';

describe('BerichtePage', () => {
  let component: BerichtePage;
  let fixture: ComponentFixture<BerichtePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerichtePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BerichtePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
