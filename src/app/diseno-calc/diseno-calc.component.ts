import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-diseno-calc',
  templateUrl: './diseno-calc.component.html',
  styleUrls: ['./diseno-calc.component.css']
})
export class DisenoCalcComponent implements OnInit {

  @ViewChild('result', { static: true }) result: any;
  title = 'ng-jasmine'

  constructor() { }

  ngOnInit(): void {
  }

  public add(num1: number, num2: number): any {
    var result: number;
    result = Number(num1) + Number(num2);
    this.result.nativeElement.value = result;

    return result;
  }
}
