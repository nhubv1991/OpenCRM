import { Directive, OnInit, Input, Output, EventEmitter, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appDynamicEvent]'
})
export class DynamicEventDirective implements OnInit {
  @Input('appDynamicEvent') eventObject = {};
  @Output() eventData = new EventEmitter<{ type: string, event: Event }>();
  @ViewChild('ctrlEvent', { static: false }) element;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.listen(this.element.nativeElement, 'click', (event) => {
      this.eventData.emit({ type: 'click', event });
    });
  }
}
