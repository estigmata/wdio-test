const { Given, Then } = require('cucumber');
const expect = require('chai').expect;

// Given(/^I go to the website$/, {timeout: 30000}, (data) => {
//   this.values = data.hashes();
//   this.values.map(element => console.log(element.url));
// });

Given(/^I go to the website$/, () => {});

Then(/^I expect the title of the page$/, (data) => {
  this.values = data.hashes();
  this.values.map(element => {
    browser.url(element.url);
    return expect(browser.getTitle()).to.be.eql(element.title);
  });
});
