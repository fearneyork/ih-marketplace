import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Header from './components/Header/Header';
import Home from "./components/Home/Home"
import Categories from './components/Categories/Categories';

function App() {
  return (
    <BrowserRouter>
      <h1>Title</h1>
      <Header></Header>
      <Switch>
        <Route exact path="/api/categories">
          <Categories />
        </Route>
        <Route exact path="/api/items">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
