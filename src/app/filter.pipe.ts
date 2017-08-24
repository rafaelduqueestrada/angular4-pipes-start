import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pay attention when do you really need to use pure, because angular
  // will recalculate every data changes on the page
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
