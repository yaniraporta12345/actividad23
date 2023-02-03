import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AsincronaComponent } from './asincrona.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AsincronaComponent', () => {
  let component: AsincronaComponent;
  let fixture: ComponentFixture<AsincronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsincronaComponent ],
      imports: [
         MatFormFieldModule,
         MatSlideToggleModule,
         FormsModule,
         MatInputModule,
         BrowserAnimationsModule
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsincronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("1 + 1 deberia ser 2",()=>{
    expect(component.sumaop(1,1)).toEqual(2)
  })
  it("1 - 1 deberia ser 0",()=>{
    expect(component.restaop(1,1)).toEqual(0)
  })
  it("4 - 1 deberia ser 3",()=>{
    expect(component.restaop(4,1)).toEqual(3)
  })
});
