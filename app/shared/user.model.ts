const validator = require("email-validator");

export class User {
  userName: string;
  password: string;
  domain:string;
  // isValidEmail() {
  //   return validator.validate(this.email);
  // }
}