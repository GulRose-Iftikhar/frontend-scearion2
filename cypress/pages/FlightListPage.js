/// <reference types ="Cypress" />
export class FlightsListingPage {

    /** wait for search to complete when loading bar disappears*/
    waitForSearchToComplete() {
        return cy.get('span', { timeout: 30000 })
            .should('length.to.be.greaterThan', 15)
    }

    /** Get Sort By element from page*/
    getSortByLabelElement() {
        return cy.get('span').contains('Sort by', { timeout: 1000 })
    }

    /** Get Sort By element from page*/
    getSortByLabelElement() {
        return cy.get('span').contains('Sort by', { timeout: 1000 })
    }

    // return price element from filters
    getPriceFilterElement() {
        return cy.get('span').contains('Price')
    }

    //return minimum price element from filters
    getMinimumPriceFilterElement() {
        this.getPriceFilterElement().parent().click()
        return this.getPriceFilterElement().parent().siblings().find('span').first()
    }

    //Retrun first flight element from Page
    firtFlightPriceElement() {
        return cy.get('button').contains('Select flight').first().siblings().find('div').last()
    }

    //Get current Sort Type
    getCurrentSortType() {
        return this.getSortByLabelElement().siblings().find('span')
    }

    //check if the sortby is desired type, "Cheapest, Shortest
    sortBy(sortType) {
        this.getCurrentSortType().then(($val) => {
            if ($val.text() !== sortType) {
                this.getCurrentSortType().click()
                this.getSortByLabelElement().siblings().find('label').contains(sortType).click()
                this.getSortByLabelElement().siblings().find('button').contains('done').click()
            }
        });
    }

    // returns minimum price from priceRangeFilter (format 1,885)
    getMinimumPriceFromFilter() {
        this.getMinimumPriceFilterElement().then(($val) => {
            return $val.text().replace(/[^0-9.,]/g, '');
        }).as('minimumPriceFromFilter')
    }

    // returns (set as alias), first flight price from the list. (format: 1,885)
    getFirstFlightPrice() {
        this.firtFlightPriceElement().invoke('text').as('firstFlightPrice')
    }

}
export const flightsListPage = new FlightsListingPage()