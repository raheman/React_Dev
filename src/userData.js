import React from 'react';
import './App.css';

const userData=(props)=>{
    return(
        <div className="card" onClick={()=>props.userAlbumThumbnail(props.id)}>
        <img src={props.img} alt="Avatar" style={{width:"20%"}}/>
        <div className="container">
        <h4><b>{props.name}</b></h4> 
        </div>
        </div>
        
    )
}
export default userData;