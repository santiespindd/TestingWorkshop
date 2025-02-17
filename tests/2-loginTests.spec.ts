import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { userData } from "../utils/userData";

test.describe("Login", () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);

        await loginPage.goto();

        await expect(page.getByText("Login to your account")).toBeVisible();
    });

    test("Test Case: Login User with correct email and password", async ({
        page,
    }) => {
        await test.step("Verify Valid Login", async () => {
            loginPage.login(userData.userEmail, userData.password);
            await expect(
                page.getByText("Logged in as " + userData.userName)
            ).toBeVisible();
        });
    });

    test("Test Case: Login User with incorrect email and password", async ({
        page,
    }) => {
        await test.step("Verify invalid Login", async () => {
            loginPage.login(userData.userEmail + "asdas", userData.password);
            await expect(
                page.getByText("Your email or password is incorrect!")
            ).toBeVisible();
        });
    });

    test('Test Case: Logout User', async ({ page }) => {

        await test.step('Login with valid user', async () => {
            loginPage.login(userData.userEmail, userData.password);
            await expect(
                page.getByText("Logged in as " + userData.userName)
            ).toBeVisible();
        })
        
        await test.step('Logout user', async () => {
            loginPage.logoutAccount();
            await expect(page).toHaveURL('https://www.automationexercise.com/login');
        })
        
    })
    
    test('Test Case: Delete account', async ({ page }) => {

        await test.step('Login with valid user', async () => {
            loginPage.login(userData.userEmail, userData.password);
            await expect(
                page.getByText("Logged in as " + userData.userName)
            ).toBeVisible();
        })

        await test.step('Delete account', async () => {
            loginPage.deleteAccount(userData.userEmail , userData.password);
            await expect(
                page.getByText('Account Deleted!')
            ).toBeVisible();
        })
        
       
      
        
    })
    
});
