import {MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    BrowserAnimationsModule],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    BrowserAnimationsModule],
})
export class MyOwnCustomMaterialModule {
}
