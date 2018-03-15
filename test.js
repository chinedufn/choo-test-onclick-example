var test = require('tape')

var JSDOM = require('jsdom').JSDOM
var DOM = new JSDOM(``, {runScripts: 'dangerously'})

global.document = DOM.window.document
global.window = DOM.window

var component = require('./index.js')

test('Simulate click event', function (t) {
  t.plan(2)

  var domElem = component(function (name, data) {
    t.equal(name, 'click')
    t.equal(data, 'I was clicked!')
  })

  var clickEvent = document.createEvent('CustomEvent')
  clickEvent.initEvent('click', true, true)

  domElem.querySelector('div').dispatchEvent(clickEvent)
})
