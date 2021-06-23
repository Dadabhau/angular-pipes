import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: any) {
    return value.substr(0, 10) + ' ...';
  }
}
