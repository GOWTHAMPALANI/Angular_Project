import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(Element: ElementRef) {
    console.log('Element');
    Element.nativeElement.innerText="Text is changed by changeText Directive Color and Backgroundcolor ";
    Element.nativeElement.style.backgroundColor  ="red"; 
    Element.nativeElement.style.color  ="white";
   }

}
