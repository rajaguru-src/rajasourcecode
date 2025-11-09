import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PipecomponentComponent } from './pipe-example/pipecomponent.component';
import { DirectiveComponent } from './directive-example/directive.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ApiExampleComponent } from './api-example/api-example.component';

@NgModule({
  declarations: [
    AppComponent,
    PipecomponentComponent,
    DirectiveComponent,
    ReactiveComponent,
    ApiExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }