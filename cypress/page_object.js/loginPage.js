class LoginPage {

    get loginPageHeading() {
        return cy.get("h1");
    }

    get emailInput() {
        return cy.get(".el-input__inner").first();
    }

    get passwordInput() {
        return cy.get(".el-input__inner").eq(-2);
    }

    get submitBtn() {
        return cy.get(":submit").first();
    }

    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.submitBtn.click();
    }
}

export const loginPage = new LoginPage();