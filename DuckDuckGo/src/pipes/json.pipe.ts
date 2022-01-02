import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'json'
})
export class JsonPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    debugger
    return JSON.parse(value["value"]);
  }

}
