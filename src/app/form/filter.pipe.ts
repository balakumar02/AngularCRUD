import { Pipe, PipeTransform } from '@angular/core';
import { View } from '../forms/view/viewforms/view';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(view: View[], search: string): View[] {
    if (!view || !search) {
      return view;
    }
    return view.filter((result) =>
      result.userid.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }
}
