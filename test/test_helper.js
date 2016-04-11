import React from 'react';
import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

//fakes dom inside terminal
global.document = jsdom.jsdom(<!doctype html><html><body></body></html>);
global.window = global.document.defaultView;

//we tell jquery to go to the global window we made

const $ = jquery(global.window);


//build renderComponent that renders a react class

function renderComponent(componentClass, props, state){
  const componentInstance = TestUtils.renderIntoDocument(
  <Provider store={createStore(reducers, state)}>
    <componentClass {...props}/>
  </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function(eventName, value) {

  if(value){
    this.val(value);
  }

  TestUtils.Simulate[eventName](this[0]);
}

chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
