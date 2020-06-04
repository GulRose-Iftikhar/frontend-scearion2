/// <reference types ="Cypress" />

export class AppHeaderPage {
    constructor() {
        this.languageSelector = '[data-testid=Header__LanguageSwitch]'
        this.flightNavigationTab = '[data-testid=Header__FlightsNavigationTab]'
    }

    //Select English language if Arabic is Selected
    setLanguageToEnglishIfNotSet() {
        cy.getCookie('language')
            .then((val) => {
                if (val.value === 'ar') {
                    cy.get(this.languageSelector).then(($toggleBtn) => {
                        cy.wrap($toggleBtn).click()
                        if (cy.wrap($toggleBtn).contains('Change language')) {
                            cy.wrap($toggleBtn).siblings().find('a').contains('English').click()
                        }
                    })
                }
            })
    }

    //Click Flight Navigation Tab
    clickOnFlightNavigationTab() {
        cy.get(this.flightNavigationTab).click()
    }
}