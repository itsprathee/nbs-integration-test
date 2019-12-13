import { Then } from 'cucumber';
import MortgageRatesPage from '../page/mortgageRates.page';
import RemortgagePage from '../page/remortgage.page';

Then('I should see the following Product results', (dataTable) => {
    let data = dataTable.raw();

    MortgageRatesPage.verifyProductResults(data);

});

Then('I should see the page heading {string}', (expectedText) => {
    RemortgagePage.verifyPageHeader(expectedText);

});


