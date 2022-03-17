const { element, by } = require("protractor");

describe('',function(){

    function calculation(a,b,operation){
        element(by.model("first")).sendKeys(a);  
        element.all(by.tagName("option")).each(function(item){
            item.getAttribute("value").then(function(values){
                if(values == operation){
                    item.click();
                }
            })
        })
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    }
    it('',function(){
        browser.get("http://juliemr.github.io/protractor-demo/");
        calculation(3,3,"ADDITION");
        calculation(3,3,"DIVISION");
        calculation(3,3,"MULTIPLICATION");
        calculation(3,3,"SUBTRACTION");

        element.all(by.repeater("result in memory")).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(values){
                console.log(values);
            })
        })
    })
})