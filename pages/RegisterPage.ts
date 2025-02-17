import { Page, Locator } from '@playwright/test';

export class RegisterPage {
    private page: Page;
    private newUserText: Locator;
    private nameInput: Locator;
    private emailInput: Locator;
    private signupButton: Locator;
    private accountInfoText: Locator;

    // Detalles del formulario
    private titleOption: (title: string) => Locator;
    private passwordInput: Locator;
    private daySelect: Locator;
    private monthSelect: Locator;
    private yearSelect: Locator;
    private newsletterCheckbox: Locator;
    private specialOffersCheckbox: Locator;

    private firstNameInput: Locator;
    private lastNameInput: Locator;
    private companyInput: Locator;
    private addressInput: Locator;
    private address2Input: Locator;
    private countrySelect: Locator;
    private stateInput: Locator;
    private cityInput: Locator;
    private zipcodeInput: Locator;
    private mobileNumberInput: Locator;

    private createAccountButton: Locator;
   

    constructor(page: Page) {
        this.page = page;

        // Selectores del flujo de registro
        
        this.newUserText = page.getByText('New User Signup!');
        this.nameInput = page.locator('[data-qa="signup-name"]');
        this.emailInput = page.locator('[data-qa="signup-email"]');
        this.signupButton = page.locator('[data-qa="signup-button"]');
        this.accountInfoText = page.getByText('ENTER ACCOUNT INFORMATION');

        this.titleOption = (title: string) => page.getByLabel(title);
        this.passwordInput = page.locator('[data-qa="password"]');

        this.daySelect = page.locator('#days');
        this.monthSelect = page.locator('#months');
        this.yearSelect = page.locator('#years');

        this.newsletterCheckbox = page.locator('#newsletter');
        this.specialOffersCheckbox = page.locator('#optin');

        this.firstNameInput = page.locator('#first_name');
        this.lastNameInput = page.locator('#last_name');
        this.companyInput = page.locator('#company');
        this.addressInput = page.locator('#address1');
        this.address2Input = page.locator('#address2');
        this.countrySelect = page.locator('#country');
        this.stateInput = page.locator('[name="state"]');
        this.cityInput = page.locator('#city');
        this.zipcodeInput = page.locator('#zipcode');
        this.mobileNumberInput = page.locator('#mobile_number');

        this.createAccountButton = page.locator('[data-qa="create-account"]');
       
       

    }

    async goto() {
        await this.page.goto('https://www.automationexercise.com/login');
    }

    async fillSignupForm(name: string, email: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.signupButton.click();
        
    }

    async fillAccountDetails(userData: any) {
        await this.accountInfoText.waitFor();
        await this.titleOption(userData.title).check();
        await this.passwordInput.fill(userData.password);

        await this.daySelect.selectOption(userData.dateOfBirth.day);
        await this.monthSelect.selectOption(userData.dateOfBirth.month);
        await this.yearSelect.selectOption(userData.dateOfBirth.year);

        await this.newsletterCheckbox.check();
        await this.specialOffersCheckbox.check();

        await this.firstNameInput.fill(userData.firstName);
        await this.lastNameInput.fill(userData.lastName);
        await this.companyInput.fill(userData.company);
        await this.addressInput.fill(userData.address);
        await this.address2Input.fill(userData.address2);
        await this.countrySelect.selectOption(userData.country);
        await this.stateInput.fill(userData.state);
        await this.cityInput.fill(userData.city);
        await this.zipcodeInput.fill(userData.zipcode);
        await this.mobileNumberInput.fill(userData.mobileNumber);

        await this.createAccountButton.click();
       
    }

   
    
}
