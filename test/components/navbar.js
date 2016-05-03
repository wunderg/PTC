import React from 'react';
import { expect } from '../test_helper.js';
import { shallow, mount, render } from 'enzyme';
import App from '../../src/containers/navbar/index.js';

describe('Navbar', () => {

  it('shows main component ', () => {
    console.log(global.window.localStorage);
    const component = shallow(<App />);
    expect(component).to.exist;
  });
});
