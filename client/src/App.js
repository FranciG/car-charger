import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from  "./components/AppNavbar";
import ItemList  from "./components/ItemList";
import { Provider } from 'react-redux';
import store from './store';
import Message from './components/Message';
import { Container } from 'reactstrap';
import {loadUser} from './actions/authActions';

class App extends Component {
//Calling loadUser when the app renders
  componentDidMount(){
  store.dispatch(loadUser());
}

//Provider is used to share state through components
  render() {

    return (
       <Provider store={store}>
      <div className={"App"}>
     
      <AppNavbar/>
      <Container>
      <Message />
    
      <ItemList/>
      </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
