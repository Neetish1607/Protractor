var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config={
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs:['./specs/elementBasics.js'],

    onPrepare : function(){
        // browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
              savePath: 'target/screenshots'
            })
          );
    },

    suites:{
        Smoke:['ChainLocators.js','DropDown.js'],
        Regression: 'elementBasics.js'
    },

    jasmineNodeOpts:{
        showColors:true,
    }
};