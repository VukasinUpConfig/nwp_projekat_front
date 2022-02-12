import { Pipe, PipeTransform } from '@angular/core';
import ISO6391 from 'iso-639-1';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value: string): string {
    if(value === "auto") return "Auto";
    return ISO6391.getName(value);
  }

}
