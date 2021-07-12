import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface opNumber {
  num: number;
  op: string;
}

@Injectable({
  providedIn: 'root'
})
export class OpNumberService {
  result = 0;
  resultEmitted = new Subject<number>();
  myNumber = 0;
  ciphers: string[] = [];
  numberPressed = false;
  opNumbers: opNumber[] = [];

  constructor() { }

  catchMyNum(number: number) {
    this.ciphers.push(number.toString());
    let multiNum: string = '';
    for (let cipher of this.ciphers) {
      multiNum += cipher;
    }
    this.numberPressed = true;
    this.myNumber = (+multiNum);
    return this.myNumber;
  }

  //Mostrare il risultato tramite string interpolation
  catchOperation(op: string) {
    if (this.numberPressed) {
      let num: number = this.myNumber;
      let operationNumber = { num, op };
      this.opNumbers.push(operationNumber);
      // console.log(this.opNumbers);
    } else {
      if (op === '=') { //+=
        let length = this.opNumbers.length - 1
        this.opNumbers[length].op = '=';
      } else {  //=+
        let num = this.result;
        let operationNumber = { num, op };
        this.opNumbers.push(operationNumber);
        // console.log(this.opNumbers);
      }
    }
    if (this.opNumbers.length === 1) {
      this.result = this.opNumbers[0].num;
    }
    for (let opnum of this.opNumbers) {
      if (opnum.op === "=") {
        this.showResult();
      }
    }
    this.numberPressed = false;
    this.ciphers.splice(0);
  }

  showResult() {
    let i = 0;
    for (let opnum of this.opNumbers) {
      switch (opnum.op) {
        case '+':
          this.result += this.opNumbers[i + 1].num;
          i++;
          break;
        case '-':
          this.result -= this.opNumbers[i + 1].num;
          i++;
          break;
        case 'x':
          this.result *= this.opNumbers[i + 1].num;
          i++;
          break;
        case '/':
          this.result /= this.opNumbers[i + 1].num;
          i++;
          break;
      }
    }
    console.log(this.opNumbers)
    // this.opNumbers.splice(0);
    this.resultEmitted.next(this.result)
  }
}

