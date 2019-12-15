
export default class Page {
    /**
    * define elements
    */
    get mainNavMenu() { return $('div[role="navigation"]') }
    get mortgagesMainMenu() { return $('li#MortgagesNavItem') }
    get newCustomerMortgageRatesSubMenu() { return $('[data-nbs-analytics-options*="New mortgage customers|Mortgage rates"]') }

    constructor() {
    }

    open(path) {
        browser.url(path);
        browser.pause(3000);
    }

    // navigate to main menu and click sub  menu
    navigateToMainMenuAndClickSubMenu(mainMenu, subMenu) {
        // navigate to main menu
        this.mainNavMenu.waitForVisible();
        $("=" + mainMenu).moveToObject();

        // click sub menu
        switch (subMenu.toLowerCase()) {
            case 'new mortgage customers: mortgage rates':
                this.newCustomerMortgageRatesSubMenu.waitForVisible();
                this.newCustomerMortgageRatesSubMenu.click();
                break;
        }
    }
 
}

