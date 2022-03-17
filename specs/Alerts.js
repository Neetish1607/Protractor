const { browser, element, by } = require("protractor")

describe('Alert Demo',function(){
    it('Open Non-Angular App',function(){

        browser.waitForAngularEnabled(false);
        browser.get("http://qaclickacademy.com/practice.php");
        element(by.id("confirmbtn")).click();
        browser.switchTo().alert().accept().then(function(){
            browser.sleep(3000);
        })


    })
})