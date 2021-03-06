import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/LoginBar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import SignUp from './components/SignUp';
import React from 'react';
import About from './components/About';
import ProductPage from './components/ProductPage';
import ChatPage from './components/ChatPage';


function App() {
  return (
    <div>
      <span>
        <SearchBar/>
      </span>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="App">
            
            <Header />
              <Main
              
              
              />
            <Footer />
          </div>
        </Route>
        <Route
          exact
          path="/signup"
          render={(props) =>
            <SignUp />
          } />

           
          
          <Route  exact path="/login"
          render={(props) =>
            <Login />}
          >
            

          </Route>  
        <Route  exact path="/about"
          render={(props) =>
            <About />}
          >
          </Route>

          <Route
          exact
          path="/ProductPage"
          render={(props) =>
            <ProductPage />
          } />

<Route
          exact
          path="/ChatPage"
          render={(props) =>
            <ChatPage />
          } />
          
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
