import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Header from './components/Header/Header';
import Home from "./components/Home/Home"
import Categories from './components/Categories/Categories';
import Items from './components/Items/Items';
import CategoryPage from './components/CategoryPage/CategoryPage';
import SelectUser from './components/SelectUser/SelectUser';
import { useState } from "react";
import { UserContext } from "./contexts/User"


function App() {
  const [user, setUser] = useState({username: "Will Smith", avatar_url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg"});

  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <div className="App">
          <h1>Title</h1>
          <Header></Header>
          <Switch>
            <Route exact path="/select-user">
              <SelectUser />
            </Route>
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
