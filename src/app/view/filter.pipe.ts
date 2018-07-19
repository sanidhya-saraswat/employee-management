import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee.interface';
@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
    transform(items: Employee[], searchText: string) {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(obj => {
            return obj.name.toLowerCase().includes(searchText) || obj.address.city.toLowerCase().includes(searchText)
        });
    }
}