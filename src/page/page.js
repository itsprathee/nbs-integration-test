
export default class Page {
    get mainNavMenu() { return $('div[role="navigation"]')}
    get mortgagesNavMainMenu() { return $('li#MortgagesNavItem') }
    get newCustomerMortgageRatesSubMenu() { return $('[data-nbs-analytics-options*="New mortgage customers|Mortgage rates"]') }

    constructor() {
    }

    open(path) {
        browser.url(path);
        this.mainNavMenu.waitForVisible();
    }

    // hover over main nav menu
    hoverOverMainNavMenu(mainNavMenu) {
        this.mortgagesNavMainMenu.waitForVisible();
        let elem = "=" + mainNavMenu;
        $(elem).moveToObject();
        // browser.execute( () => { $(':contains('+mainNavMenu+')').trigger('mouseover');})
    }

    // click sub menu 
    navigateToNewCustomersMortgageRatesPage() {
        //this.mortgagesNavMainMenu.waitForVisible();
        //browser.execute( () => { $('#MortgagesNavItem').trigger("mouseover");})
        this.hoverOverMainNavMenu('Mortgages');
        let elem1 = "h4=New mortgage customers";
        let elem2 = "=Mortgage rates"
        $(elem1).waitForVisible();
        $(elem1).$('ul').$(elem2).click();
        //this.newCustomerMortgageRatesSubMenu.click();
    }

}

