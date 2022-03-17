const {element, by} = require("protractor");

class elementBasicsObjects {
    constructor()
    {
    this.firstInput = element(by.model("first"));
    this.secondInput = element(by.model("second"));
    this.goButton = element(by.id("gobutton"));
    this.result =element(by.css("h2[class='ng-binding']"));
    this.getURL = function(){
        browser.get("http://juliemr.github.io/protractor-demo/");
    }
    }
}
module.exports = new elementBasicsObjects();

