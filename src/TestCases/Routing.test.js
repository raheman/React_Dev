import React from 'react';
import App from '../App';
import {configure,shallow,mount} from 'enzyme';
import {MemoryRouter} from 'react-router';
import Adapter from 'enzyme-adapter-react-16';
import Routing from '../Routing';
import Album from '../Album';
import ViewAlbum from '../ViewAlbum';
import PhotoDisplay from '../PhotoDisplay';


configure({adapter:new Adapter()});

describe('Routing Component Test',()=>{
  it('should return path if exist',()=>{
    const wrapper=mount(<MemoryRouter initialEntries={['/']}><Routing /></MemoryRouter>);
    expect(wrapper.find(App)).toHaveLength(1);
    expect(wrapper.find(Album)).toHaveLength(0);
  })
  it('wrong path if not exist',()=>{
    const wrapper=mount(<MemoryRouter initialEntries={['/abc']}><Routing /></MemoryRouter>);
    expect(wrapper.find(App)).toHaveLength(1);
    expect(wrapper.find(ViewAlbum)).toHaveLength(0);
    expect(wrapper.find(PhotoDisplay)).toHaveLength(0);
    expect(wrapper.find(Album)).toHaveLength(0);
  })
  
})
