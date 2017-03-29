import * as dialogsModule from "ui/dialogs";

export function alert(message: string) {
  return dialogsModule.alert({
    title: "HHI Workflows",
    okButtonText: "OK",
    message: message
  });
}
