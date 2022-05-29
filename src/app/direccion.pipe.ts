import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'direccion',
})
export class DireccionPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 20) {
      const direccionAbreviada = value.substring(0, 20) + '...';
      return direccionAbreviada;
    } else {
      return value;
    }
  }
}
