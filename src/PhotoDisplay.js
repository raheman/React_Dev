import React from 'react';

const photoDisplay=(props)=>{
    return(
        <div>
            <div>
                <button onClick={() => props.history.push("/")}>Home</button>
            </div>
            <img src={localStorage.getItem("photourl")} alt="defaultImg"/>
        </div>
    )
}

export default photoDisplay;