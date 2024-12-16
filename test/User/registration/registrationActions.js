// const expect = require('chai').expect;
const { expect } = require('chai');
const { browser } = require('@wdio/globals')
const { faker, tr } = require('@faker-js/faker');
// const { expect } = require('@wdio/globals')
const report = require('@wdio/allure-reporter').default
const registrationsObjects = require('./registrationObjects');


class RegistrationsActions {

}
module.exports = new RegistrationsActions();