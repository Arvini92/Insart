import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatTableModule,
  MatSortModule,
} from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
  ],
})
export class MaterialModule { }
