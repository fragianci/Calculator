import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpNumberService {

  constructor() { }

  catchMyNum(num: number){
    return num;
  }
}
