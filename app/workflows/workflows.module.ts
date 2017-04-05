import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { workflowsRouting } from "./workflows.routing";
import { WorkflowsComponent } from "./workflows.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    workflowsRouting
  ],
  declarations: [
      WorkflowsComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class WorkflowsModule {}
