/// <reference types="Cypress"/>

import { loginPage } from "../page_object.js/loginPage"

const credentials = {
    validEmail: "dusan.srdjanov@gmail.com",
    validPassword: "Didaskal91"
};

describe("Login test", () => {

    before("Visit site", () => {
        cy.visit("/login");
        cy.url().should("include", "/login");

        loginPage.loginPageHeading
            .should("be.visible")
            .and("have.text", "Log in with your existing account");
    });

    it("Login with valid credentials", () => {
        cy.intercept({
            method: "POST",
            url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
        }).as("successfulLogin");

        loginPage.login(credentials.validEmail, credentials.validPassword);
        cy.wait("@successfulLogin").then((interception) => {
            console.log("INTERCEPTION", interception);
            expect(interception.response.statusCode).eq(200);
      });
        cy.url().should("not.include", "/login");
    });
});