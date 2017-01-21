import { Pipe, PipeTransform } from '@angular/core';
import {Show} from '../interfaces';

@Pipe({
  name: 'orderByAirdate',
  pure: false
})
export class OrderByAirdatePipe implements PipeTransform {

  transform(input: Show[], field: string, desc: boolean = false): Object[] {
    if (input && field) {
      return Array.from(input.filter((show: Show) => show[field])).sort((a: Show, b: Show) => {
        if (a[field].airstamp < b[field].airstamp) {
          return desc ? 1 : -1;
        }
        if (a[field].airstamp > b[field].airstamp) {
          return desc ? -1 : 1;
        }
        return 0;
      });
    }
    return input
  }

}
