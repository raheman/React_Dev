import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Album from '../Components/Album';
import userData from '../Components/userData';


configure({adapter:new Adapter()});

describe('UserData Component Test',()=>{

  it('div click event',()=>{
    const mockcallback=jest.fn();
    const div= shallow((<div onClick={mockcallback}>Data</div>))
    div.find('div').simulate('click');
    expect(mockcallback.mock.calls.length).toEqual(1);
  })
  it('should display photo',()=>{
      
    const wrapper=shallow(<Album  match={{params: {id: 1}}}/>);
    expect(wrapper.find(userData)).not.toBe(null);
  })

  it('check initial state return data',()=>{
    var arr=[];
    const wrapper=shallow(<Album  match={{params: {id: 1}}}/>);
    wrapper.setState({albumData:['a','b','c']});
    expect(wrapper.find(userData)).toHaveLength(3);
  })
  
})
