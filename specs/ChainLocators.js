const{browser} = require("protractor")


describe('chain locators',function(){
    it('',function(){
        browser.get("http://juliemr.github.io/protractor-demo/");
        // repeater, chain locators, css for identical tags

        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("3").then(function(){
            browser.sleep(5000)
        })
        element(by.id("gobutton")).click();
        element(by.repeater("result in memory")).element(by.css('td:nth-child(3)')).getText().
        then(function(text){
            console.log(text)
        })

    })
})