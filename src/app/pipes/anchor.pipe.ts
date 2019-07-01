import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'anchor'
})
export class AnchorPipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  private isValidURL(str) {
    let a  = document.createElement('a');
    a.href = str;
    return (a.host && a.host !== window.location.host);
  }

  sanitize(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

  transform(value: any, ...args: any[]): any {
    if (this.isValidURL(value)) {
      return this.sanitize(`<a href="${value}" target="_blank">${value}</a>`);
    }
    return value;
  }

}
