import React,{Component} from 'react';
import '../CSS/App.css';
import GlobalServices from '../Services/services';
import UserData from './userData';
import UserImg from '../Images/user.png';

class App extends Component{
constructor(){
  super();
  this.state={
    usersData:[]
  }
}
  componentDidMount=()=>{
    var url="http://jsonplaceholder.typicode.com/users";
    GlobalServices.getData(url).then((response) => {
      this.setState({usersData:response.data});
    }).catch((error)=>{
      console.log(error);
    })
  }

  userAlbumThumbnail=(id)=>{
    this.props.history.push("/album/"+id);
  }

render(){
  return (
    <div className="App">
     <header className="title">Users</header>
     <div>
       {
         this.state.usersData.map((user,index)=>{
          return <UserData key={user.id} 
                    id={user.id} 
                    name={user.name}
                    img={UserImg}
                    userAlbumThumbnail={this.userAlbumThumbnail}
                    />
         })
       }
     
     </div>
    </div>
  );
}

}

export default App;
