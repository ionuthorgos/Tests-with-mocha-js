
var assert = require('assert');

describe('Form Functionality', function(){
    it('should allow the user to submit', function login(){
        browser
           .url('/')
           .setValue("//input[@name = 'email']",'horgosdumitru+441@gmail.com')
           .setValue("//*[@name = 'password']", '123456')
           .click("//*[@type = 'submit']")
           .isVisibleWithinViewport("//p[text()='dashboard']")     
           
           var url = browser.getUrl();     
            console.log('Title is: ' + url);
     })

     it('should allow the user to submit', function (){
               browser.url('/')
               browser.isExisting('(//button[@class="li-btn li-btn-blue mb-2"])[1]')
               browser.click('(//*[@class="li-btn li-btn-blue mb-2"])[1]')
        })
})
// .isVisible('//button[@class="li-btn li-btn-blue mb-2"])[1]')
// .implicitly_wait(10)
// .waitForExist("//*[text()='Developer Test']")
// .find_elements_by_xpath("//*[text()='Developer Test']")