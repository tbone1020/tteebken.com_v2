import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'techItem'
})
export class TechItemPipe implements PipeTransform {

  transform(value: string[]): string {
    return value.map(technology => `<strong>${technology}</strong>`).join(' ');
  }

}
