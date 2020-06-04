/// <reference types ="Cypress" />
import { HomePage } from '../pages/HomePage'
import { getRandomOriginValue, getRandomDestinationValue, getRandomFutureDate, } from '../utils/Helper_spec'
import { AppHeaderPage } from '../pages/AppHeaderPage'
import { flightsListPage } from '../pages/FlightListPage'
describe('Search Cheapest Flight Price', () => {
    const homePage = new HomePage()
    const appHeaderPage = new AppHeaderPage()

    it('should navigate to fligh homepage and select English language if not already Selected', () => {
        cy.visit('/')

        //Change language if not set to Enlgish and then verify Url contains /en
        appHeaderPage.setLanguageToEnglishIfNotSet()
        cy.url().should('include', '/en')

        //Navigate to flight page by clicking on Flight tab and then verify Url contains /flight-home
        appHeaderPage.clickOnFlightNavigationTab()
        cy.url().should('include', '/flights-home')
    })

    it('should enter random search criteria and search for available flights', () => {
        let randomOrigin = getRandomOriginValue()
        let randomDestination = getRandomDestinationValue()
        let randomDepartureDate = getRandomFutureDate(3)
        let randomReturnDate = getRandomFutureDate(6)

        homePage.selectOriginValue(randomOrigin)
        homePage.selectDestinationValue(randomDestination)
        homePage.selectDepartureDateValue(randomDepartureDate)
        homePage.selectReturnDateValue(randomReturnDate)
        homePage.clickSearchButton()

        //Verify URL contains the random Search values selected in previous steps
        cy.url().should('include', randomOrigin)
        cy.url().should('include', randomDestination)
        cy.url().should('include', randomDepartureDate)
        cy.url().should('include', randomReturnDate)
    })

    it('should verify that minimum price range equals to price of cheapest flight', () => {
        flightsListPage.waitForSearchToComplete()  
        flightsListPage.sortBy('Cheapest')
        flightsListPage.getFirstFlightPrice()
        flightsListPage.getMinimumPriceFromFilter()

        //Verify minimumPriceFromFilter is equal to FirstFlightPrice of Search Result
        cy.get('@minimumPriceFromFilter').then(($minimumPriceFromFilter) => {
            cy.get('@firstFlightPrice').then(($firstFlightPrice) => {
                expect($minimumPriceFromFilter).equal($firstFlightPrice)
            });
        });
    })

})

