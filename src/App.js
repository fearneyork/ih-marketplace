import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Header from './components/Header/Header';
import Home from "./components/Home/Home"
import Categories from './components/Categories/Categories';
import Items from './components/Items/Items';
import CategoryPage from './components/CategoryPage/CategoryPage';
import { useState } from "react";
import { UserContext } from "./contexts/User"


function App() {
  const [user, setUser] = useState({username: "Paul-C", avatar_url: "https://example.com/Paul-C.jpg"});

  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <div className="App">
          <h1>Title</h1>
          <Header></Header>
          <Switch>
            <Route exact path="/categories/:category_name">
              <CategoryPage />
            </Route>
            <Route exact path="/categories">
              <Categories />
            </Route>
            <Route exact path="/items">
              <Items />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
