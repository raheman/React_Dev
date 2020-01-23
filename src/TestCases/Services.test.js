import React from 'react';
import ViewAlbum from '../Components/ViewAlbum';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import userData from '../Components/userData';
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
      it('fetches catch data from an API', async () => {
        const data = 'error';

        axios.get.mockRejectedValue(() => Promise.reject('error'));
        await expect(GlobalServices.getData('http://jsonplaceholder.typicode.com/photos?albusmId=0')).rejects.toHaveLength(0);
      })

    
  })