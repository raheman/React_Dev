import React from 'react';
import ViewAlbum from '../ViewAlbum';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import userData from '../userData';
import axios from "axios";
import GlobalServices from '../Services/services';

jest.mock('axios');


configure({adapter:new Adapter()});

describe('Api fetch Component Test',()=>{
    it('fetches successfully data from an API', async () => {
        const data = [];
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await expect(GlobalServices.getData('http://jsonplaceholder.typicode.com/photos?albumId=0')).resolves.toEqual(data);
      })
      it('fetches error data from an API', async () => {
        const data = [];
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await expect(GlobalServices.getData('http://jsonplaceholder.typicode.com/photos?albumId=6')).resolves.toEqual(data);
      })
    
  })