import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { AppLayoutModule } from '../../../ng-components/src/lib/app-layout/app-layout.module';
import { DeleteButtonModule, ShellModule } from 'ng-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppLayoutModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot([]),
    DeleteButtonModule,
    ShellModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
