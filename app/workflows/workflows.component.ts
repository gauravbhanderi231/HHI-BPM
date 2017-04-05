import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { action } from "ui/dialogs";
import { Color } from "color";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import * as SocialShare from "nativescript-social-share";
import { WorkflowService } from "./shared";
import { LoginService, alert } from "../shared";
import { TnsSideDrawer } from "nativescript-sidedrawer";
@Component({
  selector: "wf-workflows",
  moduleId: module.id,
  templateUrl: "./workflows.component.html",
  styleUrls: ["./workflows-common.css", "./workflows.component.css"],
  providers: [WorkflowService]
})
export class WorkflowsComponent implements OnInit {
  ngOnInit(): void {
    TnsSideDrawer.build({
      templates: [{
        title: 'Home',
        androidIcon: 'ic_home_white_24dp',
        iosIcon: 'ic_home_white',
      }],
      title: 'This App Name',
      subtitle: 'is just as awesome as this subtitle!',
      listener: (index) => {
        this.i = index
      },
      context: this,
    });
  }

  grocery: string = "";
  isAndroid;
  isShowingRecent = false;
  isLoading = false;

  showMenu(){
    TnsSideDrawer.toggle();
  }

}