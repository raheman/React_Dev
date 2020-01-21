import React from 'react';
import App from '../Components/App';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import userData from '../Components/userData';

configure({adapter:new Adapter()});

describe('App Component Test',()=>{
  it('should return data',()=>{
    const wrapper=shallow(<App />);
    expect(wrapper.find(userData)).not.toBe(null);
  })

  it('check initial state return data',()=>{
    var arr=[];
    const wrapper=shallow(<App />);
    wrapper.setState({usersData:['a','b','c']});
    expect(wrapper.find(userData)).toHaveLength(3);
  })
  
})
