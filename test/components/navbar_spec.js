import React from 'react';
import { expect } from '../test_helper.js';
import { shallow, mount, render } from 'enzyme';
import Navbar from '../../src/containers/navbar/index.js';

describe('Navbar', () => {

  it('shows navbar component ', () => {
    const initialState = {user: {isAuthenticated: false}}
    const component = shallow(<Navbar props={initialState} />);
    expect(component).to.exist;
  });
});
