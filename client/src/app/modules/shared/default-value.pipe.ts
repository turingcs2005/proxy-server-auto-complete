import { Pipe, PipeTransform } from '@angular/core';
/*
 * Checks if a value is null
    If null, then display 'N/A' as a default
    Otherwise, send display original value
 * Usage:
 *   value | defaultValue
 * Example 1:
 *   {{ null | defaultValue }}
 *   formats to: N/A
 * Example 2:
 *   {{ 600 | defaultValue }}
 *   formats to: 600
*/
@Pipe({name: 'defaultValue'})
export class DefaultValuePipe implements PipeTransform {
  transform(value: any): any {
    return value == null ? 'N/A' : value;
  }
}