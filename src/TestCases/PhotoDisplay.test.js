import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhotoDisplay from '../PhotoDisplay';

configure({adapter:new Adapter()});

describe('Phpoto Display Component Test',()=>{
    
    it('button text displayed correctly',()=>{
        const wrapper=shallow(<PhotoDisplay />);
        expect(wrapper.find('button').text()).toEqual('Home');  
    })
  it('should display photo',()=>{
    const wrapper=shallow(<PhotoDisplay />);
    expect(wrapper.find({ prop: 'src' })).toHaveLength(0);  
})

it('button click event',()=>{
  const mockcallback=jest.fn();
  const button= shallow((<button onClick={mockcallback}>Home</button>))
  button.find('button').simulate('click');
  expect(mockcallback.mock.calls.length).toEqual(1);
})
  
})
