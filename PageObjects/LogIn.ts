import { ElementFinder, element, by } from "protractor";

export class LogIn {
    txtUserName: ElementFinder;
    txtPassword: ElementFinder;
    btnClickOnSignIn: ElementFinder
    
    constructor() {
        this.txtUserName = element(by.name("username"));
        this.txtPassword = element(by.name("password"));
        this.btnClickOnSignIn = element(by.name("login"));
       
    }
}