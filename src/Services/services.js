import React from 'react';
import axios from 'axios';
class GlobalServices extends React.Component{

    static getData=url=>{
        return new Promise((resolve,reject)=>{
            axios.get(url).then(response=>{
                resolve(response);
            }).catch(errorobj=>{
                reject(errorobj);
            });
        })
    }
}

export default GlobalServices;