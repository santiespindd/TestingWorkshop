import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { userData } from '../utils/userData';

test.describe('User Registration', () => {

    let registerPage: RegisterPage;

    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        await registerPage.goto(); 
        await expect(page.getByText('New User Signup!')).toBeVisible();
    });
    
    test('Test Case 1: Register User', async ({page}) => {
       


        await test.step('Complete signup form and navigate to next step', async () => {
            await registerPage.fillSignupForm(userData.userName, userData.userEmail);

            await expect(page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible();

        });

        await test.step('Fill details and verify account created', async () => {
            await registerPage.fillAccountDetails(userData);
      
             await expect(page.getByText('ACCOUNT CREATED!')).toBeVisible();
        });

    });

    test('Test Case 2: Register User with existing email', async ({page}) => {

        await registerPage.fillSignupForm(userData.userName, userData.userEmail);
        await expect(page.getByText('Email Address already exist!')).toBeVisible();
        
    })
    


});
