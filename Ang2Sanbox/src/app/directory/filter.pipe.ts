import { Pipe, PipeTransform } from '@angular/core';
import { NinjasResponse } from '../Response/NinjasResponse';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: NinjasResponse[], term: string): any {

    if (term == undefined) return ninjas;

    return ninjas.filter(function (ninja) {
      return ninja.name.toLowerCase().includes(term.toLowerCase());
    })
  }
}
