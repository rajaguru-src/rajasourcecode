import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByStatus'
})
export class FilterByStatusPipe implements PipeTransform {

  transform(items: any[], status: string): any[] {
    if(!items || !status){
      return items;
    }
    let filtervalue = status.toLowerCase();
    console.log(filtervalue);
    let filres= items.filter(item => {
      return item.status && item.status.toLowerCase()=== filtervalue
    }
    );    
    console.log("filres",filres);
    return filres;
  }

}