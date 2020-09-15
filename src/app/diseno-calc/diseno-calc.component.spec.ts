import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoCalcComponent } from './diseno-calc.component';

describe('DisenoCalcComponent', () => {
  let app: DisenoCalcComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisenoCalcComponent ],
      providers: []
    })
    .compileComponents();

    TestBed.configureTestingModule({
      declarations: [ DisenoCalcComponent ]
    })
    .createComponent(DisenoCalcComponent);
  });

  it('Test Component Add', () => {
    (<HTMLInputElement>document.getElementById('num1')).value = '2';
    (<HTMLInputElement>document.getElementById('num2')).value = '2';
    console.log('----------------------');
    console.log((<HTMLInputElement>document.getElementById('num1')).value);

    document.getElementById('calc').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('4'); 
  });

  it('Title Content ', () => {
    const title = document.getElementById('title').innerHTML;
    expect(title).toContain('Test')
  });
});
