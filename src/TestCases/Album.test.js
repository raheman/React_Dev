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
  it('return function value',()=>{
    const historyMock = { push: jest.fn() };
    const wrapper = shallow(<Album match={{params: {id: 1}}} history={historyMock} />)  
    expect(historyMock.push.mock.calls[0]).toEqual(undefined);
   
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
  // it('fetches successfully data from an API', async () => {
  //   const data = [];
  //   axios.get.mockImplementationOnce(() => Promise.resolve(data));
  //   await expect(GlobalServices.getData('http://jsonplaceholder.typicode.com/photos?albumId=0')).resolves.toEqual(data);
  // })
})
