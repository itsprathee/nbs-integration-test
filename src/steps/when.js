import { When } from 'cucumber';
import HomePage from '../page/home.page';
import MortgageRatesPage from '../page/mortgageRates.page';

When('I navigatge to {string} > {string}', (mainMenu, subMenu) => {

    HomePage.navigateToMainMenuAndClickSubMenu(mainMenu, subMenu);

});

When(/^I hover over {string} main menu$/, (mainMenu) => {

    HomePage.hoverOverMainNavMenu(mainMenu);

});

When('I find mortgage rate for the following case', (dataTable) => {
    let data = dataTable.raw();

    let nwMortgage = data[1][0];
    let typeMortgage = data[1][1];
    let propertyValue = data[1][2];
    let mortgageAmt = data[1][3];
    let term = data[1][4];

    MortgageRatesPage.findMortgageRates(nwMortgage, typeMortgage, propertyValue, mortgageAmt, term);

});

When('I filter the reults by {string} with {string}', (filterType, option) => {
    MortgageRatesPage.filterResultsByType(filterType, option);

});


When('I click more info and apply button for the product {string}', (product) => {
    MortgageRatesPage.cliclMoreInfoAndApply(product);

});

