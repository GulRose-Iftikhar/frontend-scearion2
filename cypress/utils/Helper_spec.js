//Return origin value from array
export function getRandomOriginValue() {
    let origins = ["DXB", "AUH", "DMM", "RUH"]
    return origins[Math.floor(Math.random() * origins.length)]
}

//Return destination value from array
export function getRandomDestinationValue() {
    let destinations = ["CAI", "MNL", "LHR", "BER"];
    return destinations[Math.floor(Math.random() * destinations.length)]
}

/**
 * 
 * @param {margin} is passed to keep random value for ReturnDate field always greater than Departure 
 * Date. Also, 60 days added to generate random date after two months as there are very few flights 
 * currently operation 
 */
export function getRandomFutureDate(margin){
    var randomNumberOfDays = (Math.floor(Math.random() * 3) + margin + 60);
    return Cypress.moment().add(randomNumberOfDays,"day").format('YYYY-MM-DD')
}