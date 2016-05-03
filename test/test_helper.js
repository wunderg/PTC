import { expect } from 'chai';

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};


const createStorage = () => {
  const store = {};
  store.getItem = item => store[item];
  return store;
};

global.window.localStorage = createStorage();
global.document.localStorage = createStorage();

export { expect };
