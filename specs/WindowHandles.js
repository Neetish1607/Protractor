const { browser, element, by, protractor } = require("protractor")

describe('Window Handles Demo',function(){
    it('Open Posse Website',function(){

        browser.get("https://posse.com/");
        element(by.model("userInputQuery")).sendKeys("river");
        browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
            browser.sleep(5000);
            expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
            element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
            element(by.css("a[ng-href*='London/River Island']")).click().then(function(){
                browser.getTitle().then(function(title){
                    console.log(title + "before opening the child Window");
                })
                browser.sleep(5000);
            browser.getAllWindowHandles().then(function(handles){
                browser.switchTo().window(handles[1]);

                browser.getTitle().then(function(){
                    console.log(title +" of the page after opening child window ");
                })
            })

            })
        })
    })
})