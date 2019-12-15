// mortgageRates.page.js
import Page from './page';

class MortgageRatesPage extends Page {
    /**
    * define elements
    */
    get nwMortgageRadioBtns() { return $$('[data-nbs-module-id="HaveNationwideMortgage"] [role="radiogroup"]:nth-child(1) [role="radio"] label') }
    get typeOfMortgageRadioBtns() { return $$('[data-nbs-module-id="NationwideMortgageTypeNo"] [role="radiogroup"]:nth-child(1) [role="radio"] label') }
    get propertyValueInput() { return $('[data-nbs-module-id="SearchPropertyValue"]') }
    get mortgageAmountInput() { return $('[data-nbs-module-id="SearchMortgageAmount"]') }
    get termInput() { return $('[data-nbs-module-id="SearchMortgageTerm"]') }
    get findMortgageRateBtn() { return $('#myButton') }
    get fixedCheckbox() { return $('[data-nbs-module-id="fixed"]') }
    get productFeeCheckbox() { return $('[data-nbs-module-id="product-fee-fee"]') }
    get mortgageTypeFilter() { return $('#newMortgageRatesTypeFilter') }
    get productsNameText() { return $$('#NewMortgageRateTables>div table .notOnMobile>h3') }
    get moreInfoApplyBtn_5yrs() { return $('[data-product-name="5 yr  Fixed "] a') }
    get applyBtn_5yrs() { return $('.applyButton [data-productname="5 yr Fixed "]') }

    /**
     * page specific methods
     */


    findMortgageRates(nwMortgage, typeMortgage, propertyValue, mortgageAmt, term) {
        // select do you have nation wide mortgage
        this.nwMortgageRadioBtns.forEach((radioLabel) => {
            let text = radioLabel.getText();
            if (text.trim() == nwMortgage.trim())
                radioLabel.click()
        })

        // select type of mortgage
        this.typeOfMortgageRadioBtns.forEach((radioLabel) => {
            let text = radioLabel.getText();
            if (text.trim() == typeMortgage.trim())
                radioLabel.click()
        })

        // enter property value
        this.propertyValueInput.waitForVisible();
        this.propertyValueInput.setValue(propertyValue);

        // enter mortgage amount
        this.mortgageAmountInput.waitForVisible();
        this.mortgageAmountInput.setValue(mortgageAmt);

        // enter term
        this.termInput.waitForVisible();
        this.termInput.setValue(term);
        
        // click find mortgage rate button
        this.findMortgageRateBtn.waitForEnabled();
        this.findMortgageRateBtn.click();
        
    }

    // filter results by types
    filterResultsByType(filterType1, option1) {
        this.mortgageTypeFilter.waitForVisible();
        let filterType = filterType1.toLowerCase().trim();
        let option = option1.toLowerCase().trim();

        switch( filterType ) {
            case 'mortgage type':
                    if( option == 'fixed rate'){
                        this.fixedCheckbox.waitForVisible();
                        browser.pause(3000);
                        this.fixedCheckbox.click();
                    } else {
        
                    }
                    break;
            case 'deal period':
                    if( option == '2 years'){

                    } else {
                        
                    }
                    break;
            default:
                    if( option == 'with fee'){
                        this.productFeeCheckbox.click();
                    } else {
                        
                    }
        }
     
        browser.pause(3000);

    }

    // Verify filtered results
    verifyProductResults(expectedProducts) {
        // Verify expected product array contains actual product 
        this.productsNameText.forEach( (elem) => {
            let actualProduct = elem.getText();
            expect(expectedProducts.toString()).to.include(actualProduct);
        } )

    }

    // Click More info and apply and Apply button
    cliclMoreInfoAndApply( product ) {
        
        switch(product.toLowerCase()) {
            case '5 yr fixed':
                this.moreInfoApplyBtn_5yrs.waitForEnabled();
                this.moreInfoApplyBtn_5yrs.click();
                this.applyBtn_5yrs.scroll();
                this.applyBtn_5yrs.click();
                break;

        }
    }

}

export default new MortgageRatesPage()

