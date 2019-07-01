import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'avatar'
})
export class AvatarPipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  sanitize(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

  transform(value: any, ...args: any[]): any {
    if (typeof value === 'string' && value.includes('avatar')) {
      return this.sanitize(`<mat-card>
                              <img style=" max-width: 100px; max-height: 100px;" src="${value}" mat-card-md-image alt="${value}">
                            </mat-card>`);
    }
    return value;
  }

}
