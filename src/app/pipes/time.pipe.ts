import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(value: any, ...args: any[]): any {
    if (Date.parse(value)) {
      return this.datePipe.transform(value);
    }
    return value;
  }

}
