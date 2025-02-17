import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private deleteButton: Locator;
    private logoutButton: Locator;
   

    constructor(page: Page) {
        this.page = page;
        this.usernameInput =  page.locator('[data-qa="login-email"]');
        this.passwordInput =  page.locator('[data-qa="login-password"]');
        this.loginButton =    page.getByRole('button', {name:'Login'});
        this.deleteButton =   page.locator('[href="/delete_account"]');
        this.logoutButton =   page.locator('[href="/logout"]');
      
    }

    async goto() {
        await this.page.goto('https://www.automationexercise.com/login');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async deleteAccount(username : string , password : string){

        await this.deleteButton.click();
    }

    async logoutAccount(){

        await this.logoutButton.click();
    }
    
    
}
