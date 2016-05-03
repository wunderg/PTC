import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { App } from '../../src/containers/app/index.js';

describe('Main App component', () => {

  it('shows main component ', () => {
    const user = {
        isAuthenticated: false
    };
    const component = shallow(<App user={user} />);
    expect(component).to.exist;
  });
});
