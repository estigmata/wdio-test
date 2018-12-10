const { Given, Then } = require('cucumber');
const expect = require('chai').expect;

module.exports = function () {
  Given(/^I go to the website "([^"]*)"$/, (url) => {
    browser.url(url);
  });

  Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
    expect(browser.getTitle()).to.be.eql(title);
  });
}
