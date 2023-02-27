/// <reference types="Cypress" />

import { loginPage } from "../page_object.js/loginPage";
import { addBoard } from "../page_object.js/addBoard";

const credential = {
    validEmail: "dusan.srdjanov@gmail.com",
    validPassword: "Didaskal91"
};

describe("Create organization", () => {

    beforeEach("Visit app", () => {
        cy.intercept({
            method: "POST",
            url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
        }).as("successfulLogin");

        cy.visit("/");
        loginPage.login(credential.validEmail, credential.validPassword);
        cy.wait("@successfulLogin").then((interception) => {
            console.log("INTERCEPTION", interception);
            expect(interception.response.statusCode).eq(200);
        });
    });

    it("Create board", () => {
        addBoard.createBoard("Neki Board");
    })
})