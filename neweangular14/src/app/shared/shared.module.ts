import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByStatusPipe } from './pipe/filter-by-status.pipe';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { ApiService } from './service/api.service';



@NgModule({
  declarations: [FilterByStatusPipe,HoverHighlightDirective],
  imports: [
    CommonModule
  ],
  providers:[ApiService],
  exports:[FilterByStatusPipe,HoverHighlightDirective]
})
export class SharedModule { }