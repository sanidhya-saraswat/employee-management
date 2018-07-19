import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'phonePipe'})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    if(value.match(/^\d+$/))
    {
return value;
    }
    return "NA";
  }
}