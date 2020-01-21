import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import App from './App';
import Album from './Album';
import ViewAlbum from './ViewAlbum';
import PhotoDisplay from './PhotoDisplay';

class Routing extends Component{

    render(){
        return(
            <Router>
                <Route exact path='/' component={App} />
                <Route path='/album/:id' component={Album} />
                <Route path='/viewAlbum/:id' component={ViewAlbum} />
                <Route path='/photo' component={PhotoDisplay} />
            </Router>
        );
    }

}

export default Routing;