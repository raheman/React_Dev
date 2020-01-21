import React from 'react';
import App from '../App';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserData from '../userData';

configure({adapter:new Adapter()});

describe('UserData Component Test',()=>{

  it('div click event',()=>{
    const mockcallback=jest.fn();
    const div= shallow((<div onClick={mockcallback}>Data</div>))
    div.find('div').simulate('click');
    expect(mockcallback.mock.calls.length).toEqual(1);
  })
  it('should display photo',()=>{
    const wrapper=shallow(<UserData />);
    expect(wrapper.find({ prop: 'src' })).toHaveLength(0);  
  })
  
})
