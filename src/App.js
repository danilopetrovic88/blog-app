import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AppPosts from './pages/AppPosts';
import { Link } from 'react-router-dom';
import SinglePost from './components/SinglePost';
import AddPost from './pages/AddPost';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-light bg-light">
          <ul style={{ "display": "flex" }}>
            <li className='nav-item' >
            <Link to={'/posts'} className="nav-link">
            Posts
          </Link>
            </li>
            <li className='nav-item' >
            <Link to={'/add'} className="nav-link">
            Add
          </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path={'/posts'}>
            <AppPosts />
          </Route>
          <Route exact path={'/add'}>
            <AddPost />
          </Route>
          <Route exact path={'/edit/:id'}>
            <AddPost />
          </Route>
          <Route exact path={'/posts/:id'}>
            <SinglePost />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
