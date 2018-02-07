import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural'
})
export class PluralPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value > 1 ? `${value} ${args}s` : `${value} ${args}`;
  }

}
