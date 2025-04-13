import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat',
  standalone: true
})
export class PriceFormatPipe implements PipeTransform {
  transform(value: number, currency: string = 'HUF'): string {
    const formatted = value.toLocaleString('hu-HU');
    return `${formatted} ${currency === 'HUF' ? 'Ft 💸' : currency}`;
  }
}
