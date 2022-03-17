const {browser} = require("protractor")
var {datadriven} = require("../pageObjects/data");

// var { elementBasicsObjects } = require("./pageObjects/elementBasicsObjects.js");
var using = require("jasmine-data-provider");

describe('Protractor Element Demo',function(){
var elementBasicsObjects = require("../pageObjects/elementBasicsObjects.js");
    beforeEach(function(){
        elementBasicsObjects.getURL();
    });

    // data - stores actual data
    // description - name of the data set
    // data - actual data set 
    using(datadriven, function(data, description){

        it('Locators'+description,function(){
            elementBasicsObjects.firstInput.sendKeys
            elementBasicsObjects.firstInput.sendKeys(data.firstInput);
            elementBasicsObjects.secondInput.sendKeys(data.secondInput).then(function(){
                browser.sleep(2000)
            })
            elementBasicsObjects.goButton.click();
            elementBasicsObjects.result.getText().then(function(text){
                console.log(text);
            });
            expect(elementBasicsObjects.result.getText()).toBe(data.result);
            
        })
    });
    afterEach(function(){
        console.log("Test is completed")
    });


});