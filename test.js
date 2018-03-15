var test = require('tape')

var JSDOM = require('jsdom').JSDOM
var DOM = new JSDOM(``, {runScripts: 'dangerously'})

global.document = DOM.window.document
global.window = DOM.window
global.window.requestAnimationFrame = function (cb) { setTimeout(cb, 0) }

var component = require('./index.js')

test('Simulate click event', function (t) {
  t.plan(2)

  var domElem = component(function (name, data) {
    t.equal(name, 'click')
    t.equal(data, 'I was clicked!')
  })

  domElem.querySelector('div').dispatchEvent(new window.MouseEvent('click'))
})
