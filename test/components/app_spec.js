import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { App } from '../../src/containers/app/index.js';
import Spinner from '../../src/helpers/spinner.js';

describe('Main App component ', () => {
  describe('Render Main Component when user NOT loggin in', () => {
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
      expect(wrapper.find('.container').hasClass('container')).to.equal(true);
    });
  });

  describe('Render Main Component when user IS loggin in', () => {
    let user;
    let wrapper;

    beforeEach(() => {
      user = {
        isAuthenticated: true
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
      expect(wrapper.find('.container').hasClass('container')).to.equal(true);
    });

    it('shows spinner while fetching', () => {
      user = {
        isFetching: true
      };
      wrapper = shallow(<App user={user} />);
      expect(wrapper.find(Spinner)).to.have.length(1);
    });
  });
});
