import React from 'react';
import ViewAlbum from '../Components/ViewAlbum';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import userData from '../Components/userData';
import axios from "axios";



configure({adapter:new Adapter()});
jest.mock('axios');

describe('View Album Component Test',()=>{
  it('should return data',()=>{
    const wrapper=shallow(<ViewAlbum  match={{params: {id: 1}}}/>);
    expect(wrapper.find(userData)).not.toBe(null);
  })
  it('check initial state return data',()=>{
    var arr=[];
    const wrapper=shallow(<ViewAlbum  match={{params: {id: 1}}}/>);
    wrapper.setState({thumbNailImages:['a','b','c']});
    expect(wrapper.find(userData)).toHaveLength(3);
  })
  
  it('return function value',()=>{
    const historyMock = { push: jest.fn() };
    const wrapper = shallow(<ViewAlbum match={{params: {id: 1}}} history={historyMock} />)  
    expect(historyMock.push.mock.calls[0]).toEqual(undefined);
   
  })
  
})
