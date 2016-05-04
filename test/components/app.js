import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { App } from '../../src/containers/app/index.js';

describe('Main App component when user not loggin in', () => {
  describe('Render Main Component', () => {
    let user;
    let wrapper;

    beforeEach(() => {
      user = {
        isAuthenticated: false
      };
      wrapper = shallow(<App user={user} />);
    });

    it('shows main component ', () => {
      expect(wrapper.find('#main')).to.have.length(1);
    });

    it('have id main ', () => {
      expect(wrapper.is('#main')).to.equal(true);
    });

    it('have have a container ', () => {
      expect(wrapper.hasClass('container'));
    });
  });
});
