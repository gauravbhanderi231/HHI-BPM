import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WorkflowsComponent } from "./workflows.component";
import { AuthGuard } from "../auth-guard.service";

const workflowsRoutes: Routes = [
  { path: "workflows", component: WorkflowsComponent, canActivate: [AuthGuard] },
];
export const workflowsRouting: ModuleWithProviders = RouterModule.forChild(workflowsRoutes);