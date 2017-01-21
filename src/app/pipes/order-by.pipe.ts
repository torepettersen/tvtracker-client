import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(input: Object[], field: string, desc: boolean = false): Object[] {
    if (input && field) {
      return Array.from(input).sort((a: Object, b: Object) => {
        if (a[field] < b[field]) {
          return desc ? 1 : -1;
        }
        if (a[field] > b[field]) {
          return desc ? -1 : 1;
        }
        return 0;
      });
    }
    return input
  }

}
