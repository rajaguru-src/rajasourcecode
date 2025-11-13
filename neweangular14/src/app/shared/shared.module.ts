import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilterByStatusPipe } from './pipe/filter-by-status.pipe';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { ApiService } from './service/api.service';
import {LoggingInterceptor} from './interceptor/logging.interceptor';
import {ErrorInterceptor} from './interceptor/error.interceptor';
@NgModule({
  declarations: [FilterByStatusPipe,HoverHighlightDirective],
  imports: [
    CommonModule
  ],
  providers:[ApiService,
    {provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}
  ],
  exports:[FilterByStatusPipe,HoverHighlightDirective]
})
export class SharedModule { }