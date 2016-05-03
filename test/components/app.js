import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { App } from '../../src/containers/app/index.js';

describe('Navbar', () => {

  it('shows main component ', () => {
    const component = shallow(<App />);
    expect(component).to.exist;
  });
});
