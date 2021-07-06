import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operations-panel',
  templateUrl: './operations-panel.component.html',
  styleUrls: ['./operations-panel.component.scss']
})
export class OperationsPanelComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  operands = ['+', '-', 'x', '/'];
  opNumbers: number[] = [];
  result: number = 0;
  myOperator: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  catchMyNum(number: number){
    this.opNumbers.push(number);
    console.log(this.opNumbers)
  }

  catchOperator(op: string){
    this.myOperator = op;
  }

  showResult(){
    let result: number = 0;
    if(this.opNumbers.length > 0){
      switch (this.myOperator){
        case '+':
          for(let n of this.opNumbers){
            result += n;
          }
          break;
        case '-':
          for(let n of this.opNumbers){
            result += +n;
          }
          break;
        case 'x':
          for(let n of this.opNumbers){
            result += +n;
          }
          break;
        case '/':
          for(let n of this.opNumbers){
            result += +n;
          }
          break;
      }
    }
    this.result = result;

    console.log(this.result);
  }

}
