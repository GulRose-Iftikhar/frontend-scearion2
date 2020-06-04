/// <reference types ="Cypress" />

export class HomePage {

    constructor() {
        this.originPlace = '[data-testid=FlightSearchBox__FromAirportInput]'
        this.destinationPlace = '[data-testid=FlightSearchBox__ToAirportInput]'
        this.inputPlaceWrapper = '[data-testid=AutoCompleteInputWrapper]'
        this.inputPlaceloadingIcon = '[viewBox="0 0 40 40"]'
        this.calendarNextMonthBtn = '[data-testid=FlightSearchCalendar__NextMonthButton]'
        this.departureDate = '[data-testid="FlightSearchBox__FromDateButton"]'
        this.returnDate = '[data-testid="FlightSearchBox__ToDateButton"]'
        this.searchButton = '.d-none > [data-testid=FlightSearchBox__SearchButton]'
        this.language = '[data-testid=Header__LanguageSwitch]'
    }

    //Search for random origin and select first option from list
    selectOriginValue(origin) {
        cy.get(this.originPlace).type(origin)
        cy.get(this.inputPlaceWrapper).should('not.have.descendants', this.inputPlaceloadingIcon)
        cy.waitUntil(() => cy.contains(origin).then($origin => $origin.click()))
    }

    //Select random destination value
    selectDestinationValue(destination) {
        cy.get(this.destinationPlace).type(destination)
        cy.get(this.inputPlaceWrapper).should('not.have.descendants', this.inputPlaceloadingIcon)
        cy.waitUntil(() => cy.contains(destination).then($dest => $dest.click()))
    }

    //Select random departure date value
    selectDepartureDateValue(departureDate) {
        cy.get(this.departureDate).click()
        cy.get(this.calendarNextMonthBtn).click()
        cy.get(this.calendarNextMonthBtn).click()
        cy.get(`[data-testid=FlightSearchCalendar__${departureDate}]`).click()
    }

    //Select random return date value
    selectReturnDateValue(returnDate) {
        cy.get(this.returnDate).click()
        cy.get(`[data-testid=FlightSearchCalendar__${returnDate}]`).click()
    }

    clickSearchButton() {
        cy.get(this.searchButton).first().click()
    }
}