/// <reference types="Cypress"/>

class AddBoard {

    get addBoardLink() {
        return cy.get("/my-organizations");
    }

    get addBoardCard() {
        return cy.get(".organization-list-item").first();
    }

    get addBoardField() {
        return cy.get(".vs-c-organization-boards__item--add-new").first();
    }

    get okBtn() {
        return cy.get(".vs-c-modal--features-button");
    }

    get boardInput() {
        return this.createBoardModal.find("input").last();
    }

    get nextBtn() {
        return this.addBoardModal.find("button").last();
    }

    get addBoardModal() {
        return cy.get("div[class='vs-c-modal vs-c-modal--starter vs-c-modal--create-board']");
    }

    get radioCheck() {
        return cy.get(".vs-c-radio-check").first();
    }

    get createBoardModal() {
        return cy.get("div[class='vs-c-modal vs-c-modal--starter vs-c-modal--create-board']");
    }

    createBoard(title) {
        this.addBoardCard.click()
        this.okBtn.click()
        this.addBoardField.click()
        this.boardInput.type(title)
        this.nextBtn.click()
        this.radioCheck.click()
        this.nextBtn.click()
        this.nextBtn.click()
        this.nextBtn.click()
        this.nextBtn.click()
    }

}
export const addBoard = new AddBoard();