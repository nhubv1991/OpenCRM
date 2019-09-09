import { Directive, QueryList, ContentChildren, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appFocusOnError]'
})
export class FocusOnErrorDirective {

  @ContentChildren(NgControl) fields: QueryList<NgControl>;

  @HostListener('submit')
  check() {
    const fields = this.fields.toArray();
    for (const field of fields) {
      if (field.invalid) {
        (field.valueAccessor as any)._elementRef.nativeElement.focus();
        break;
      }
    }
  }

  constructor() { }
}
