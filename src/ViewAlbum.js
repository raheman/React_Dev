import React from 'react';

import UserData from './userData';
import GlobalServices from './Services/services';

class ViewAlbum extends React.Component{

    state={
        thumbNailImages:[]
    }

componentDidMount=()=>{
    var id=this.props.match.params.id;
 var url="http://jsonplaceholder.typicode.com/photos?albumId="+id;
        GlobalServices.getData(url).then((response) => {
          this.setState({thumbNailImages:response.data});
          console.log(this.state.thumbNailImages);
        }).catch((error)=>{
          console.log(error);
        })

}
viewPhoto=(photo)=>{
    localStorage.setItem("photourl",photo);
    this.props.history.push('/photo');
}
    render(){
        return(
            <div>
                <header className="title">Photos</header>
            {
                     this.state.thumbNailImages.map((photo,index)=>{
                      return <UserData key={photo.id} 
                                id={photo.url} 
                                name={photo.title}
                                img={photo.thumbnailUrl}
                                userAlbumThumbnail={this.viewPhoto}
                                />
                     })
                   }
             </div>
        )
    }
}

export default ViewAlbum;