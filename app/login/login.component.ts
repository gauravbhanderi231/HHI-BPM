import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Color } from "color";
import { connectionType, getConnectionType } from "connectivity";
import { Animation } from "ui/animation";
import { View } from "ui/core/view";
import { prompt } from "ui/dialogs";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { alert, LoginService, User } from "../shared";
let fingerprintAuth = require("nativescript-fingerprint-auth");
import app = require("application");
import platform = require("platform");
@Component({
  selector: "gr-login",
  moduleId: module.id,
  templateUrl: "./login.component.html",
  styleUrls: ["./login-common.css", "./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: User;
  isLoggingIn = true;
  isAuthenticating = false;
  public domains: Array<string>;


  // @ViewChild("initialContainer") initialContainer: ElementRef;
  // @ViewChild("mainContainer") mainContainer: ElementRef;
  // @ViewChild("logoContainer") logoContainer: ElementRef;
  // @ViewChild("formControls") formControls: ElementRef;
  // // @ViewChild("signUpStack") signUpStack: ElementRef;
  @ViewChild("password") password: ElementRef;
  @ViewChild("domain") domain: ElementRef;

  constructor(private router: Router,
    private userService: LoginService,
    private page: Page) {
    this.user = new User();
    this.domains = ["SPECTRUM", "RAYOVAC"];
    // if (app.android && platform.device.sdkVersion >= "21") {
    //   //let test = new android.View.View;
    //   //console.log(test);
    //   let androidApp = app.android;
    //   let window = androidApp.startActivity.getWindow();
    //   // set the status bar to Color.Transparent
    //   window.setStatusBarColor(0x000000);
    //   let decorView = window.getDecorView();
    //   //decorView.setSystemUiVisibility(test.SYSTEM_UI_FLAG_HIDE_NAVIGATION);
    // }
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.showMainContent();
  }
  public onchange(args: SelectedIndexChangedEventData) {
    console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
    this.user.domain = this.domains[args.newIndex];
  }

  public onopen() {
    console.log("Drop Down opened.");
  }

  focusPassword() {
    this.password.nativeElement.focus();
  }
  focusDomain() {
    this.domain.nativeElement.focus();
  }

  login() {
    if (getConnectionType() === connectionType.none) {
      alert("HHI Workflows require an internet connection to log in.");
      return;
    }
    this.userService.login(this.user)
      .subscribe(
      () => {
        this.isAuthenticating = false;
        this.router.navigate(["/"]);
      },
      (error) => {
        console.log('here');
        this.router.navigate(["/"]);
        // alert("Unfortunately we could not find your account.");
        this.isAuthenticating = false;
      }
      );
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
    // let mainContainer = <View>this.mainContainer.nativeElement;
    // mainContainer.animate({
    //   backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
    //   duration: 1000
    // });
  }

  startBackgroundAnimation(background) {
    background.animate({
      scale: { x: 1.0, y: 10.0 },
      duration: 2000
    });
  }

  showMainContent() {
    // let logoContainer = <View>this.logoContainer.nativeElement;
    // let animations = [];
    // logoContainer.style.visibility = "visible";

    // animations.push({ target: logoContainer, opacity: 1, duration: 500 });
    // // Kick off the animation queue
    // new Animation(animations, false).play();
    // fingerprintAuth.available().then(
    //   function (avail) {
    //     if (avail) {
    //       fingerprintAuth.verifyFingerprintWithCustomFallback({
    //         message: 'Scan yer finger', // optional, shown in the fingerprint dialog (default: 'Scan your finger').
    //         fallbackMessage: 'Enter PIN' // optional, the button label when scanning fails (default: 'Enter password').
    //       }).then(
    //         function () {
    //           console.log("Fingerprint was OK");
    //         },
    //         function (error) {
    //           console.log("Fingerprint NOT OK" + (error.code ? ". Code: " + error.code : ""));
    //         }
    //         )
    //     }
    //   }
    // )
  }
}
