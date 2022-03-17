const { browser, element, by, protractor } = require("protractor")

describe('Synchronization Method',function(){
    it('Sync',function(){
        browser.waitForAngularEnabled(false);
        browser.get("");
        element(by.css("")).click();
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.invisibilityOf(element(by.id(""))),8000);
        



    })
})