import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BazService {

  constructor() {
    console.log('BazService');
  }
}
