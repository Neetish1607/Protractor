const { element, by, repeater } = require("protractor");

describe('',function(){

    function Add(a,b){
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    }
    it('',function(){
        browser.get("http://juliemr.github.io/protractor-demo/");
        // repeater, chain locators, css for identical tags
        Add(3,3);
        Add(3,6);
        Add(6,7);
        Add(7,8);
    
        element.all(by.repeater("result in memory")).count().then(function(text){
            console.log(text);
        })

        element.all(by.repeater("result in memory")).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                console.log(text);
            })

        })
    })
})