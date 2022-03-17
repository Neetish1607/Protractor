const { browser, element, by, protractor } = require("protractor")

describe('',function(){

    function selectItems(product){
        element.all(by.tagName("app-card")).each(function(item){
        
            item.element(by.css("h4 a")).getText().then(function(text){
                if(text == "iPhone X"){
                    item.element(by.css("button[class*='btn-info']")).click();
                }
            })
        })

    }

    it('',function(){
        browser.get("https://qaclickacademy.github.io/protocommerce/");
        element(by.name("name")).sendKeys("Sharma");
        element(by.name("email")).sendKeys("abdc@efgh.com");
        element(by.id("exampleInputPassword1")).sendKeys("testing");
        element(by.css("input[type='checkbox']")).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
        element.all(by.name("inlineRadioOptions")).first().click();
        element(by.buttonText("Submit")).click().then(function(){
            element(by.css("div[class*='success']")).getText().then(function(text){
                console.log(text);
            })
        })
        element(by.name("name")).clear();
        element(by.name("name")).sendKeys("M").then(function(){
            element(by.css("[class='alert alert-danger']")).getText().then(function(text){
                console.log(text)
            })
        })
        browser.manage().window().maximize();
        element(by.linkText("Shop")).click();
        browser.sleep(10000);
        selectItems("iPhone X");
        element(by.partialLinkText("Checkout")).getText().then(function(text){
            var res = text.split("(");
            expect(res[1].trim().charAt(0)).toBe(1);
        })





    })
})