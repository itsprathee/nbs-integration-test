
export default class Page {
    get mainNavMenu() { return $('[data-nbs-module-id="NavMenu"]')}
    get mortgagesNavMainMenu() { return $('[data-nbs-module-id="MortgagesNavItem"]') }
    get newCustomerMortgageRatesSubMenu() { return $('[data-nbs-analytics-options*="|New mortgage customers|Mortgage rates"]') }

    constructor() {
    }

    open(path) {
        browser.url(path);
        this.mainNavMenu.waitForVisible();
    }

 
    navigateToNewCustomersMortgageRatesPage() {
        this.mortgagesNavMainMenu.waitForVisible();
        browser.execute( () => { $('#MortgagesNavItem').trigger("mouseover");})
        this.newCustomerMortgageRatesSubMenu.waitForVisible();
        this.newCustomerMortgageRatesSubMenu.click();
    }

    itemSelector(selector, text) {
        selector.forEach((radio) => {
            let label = radio.getText();
            if (label == text)
                radio.click()
        })
    }

}

