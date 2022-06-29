import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AppPosts from './pages/AppPosts';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-light bg-light">
          <Link to={'/posts'} className="navbar-brand">
            Posts
          </Link>
        </nav>
        <Switch>
          <Route>
            <AppPosts />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
