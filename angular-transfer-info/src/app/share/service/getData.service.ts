import { Injectable } from '@angular/core';

@Injectable()
export class GetDataService {
  name: string = '小明';

  getData() {
    return this.name;
  }
}