// remortgageApply.page.js
import Page from './page'

class RemortgagePage extends Page {
    get pageHeaderText() { return $('#pageBody h1')}

    verifyPageHeader(expectedText) {
        this.pageHeaderText.waitForVisible();
        const actualText = this.pageHeaderText.getText();
        expect(expectedText).equal(actualText);
    }

}

export default new RemortgagePage()


