import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipePersonalizado'
})
export class MyPipePersonalizadoPipe implements PipeTransform {

  transform(value: string | undefined): string {
    return value?.toUpperCase() || '';
  }

}
