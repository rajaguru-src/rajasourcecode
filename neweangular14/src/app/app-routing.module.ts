import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipecomponentComponent } from './pipe-example/pipecomponent.component';
import { DirectiveComponent } from './directive-example/directive.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ApiExampleComponent } from './api-example/api-example.component';

const routes: Routes = [ 
{path:'pipe',component:PipecomponentComponent},
{path:'directive',component:DirectiveComponent},
{path:'login', component:ReactiveComponent},
{path:'api', component:ApiExampleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
