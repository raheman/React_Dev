import React from 'react';
import UserData from './userData';
import GlobalServices from '../Services/services';
import UserImg from '../Images/album.png';

class Album extends React.Component{

    state={
        albumData:[]
    }

    componentDidMount=()=>{
       var id=this.props.match.params.id;
        var url="http://jsonplaceholder.typicode.com/albums?userId="+id;
        GlobalServices.getData(url).then((response) => {
          this.setState({albumData:response.data});
          console.log(this.state.albumData);
        }).catch((error)=>{
          console.log(error);
        })
    }

    userAlbumClickedThumbnail=(id)=>{
       
        this.props.history.push('/viewAlbum/'+id);
    }

    render(){
        return(
        <div>
                <header className="title">Albums</header>

{
         this.state.albumData.map((album,index)=>{
          return <UserData key={album.id} 
                    id={album.userId} 
                    name={album.title}
                    img={UserImg}
                    userAlbumThumbnail={this.userAlbumClickedThumbnail}
                    />
         })
       }
        </div>
        )
    }

}

export default Album;