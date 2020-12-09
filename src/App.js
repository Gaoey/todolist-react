import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css'
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import routes from './routes.js'
import PageTemplate from './layouts/PageTemplate'

function App() {
  return (
    <PageTemplate>
      <Router>
        <Switch>
          {
            routes.map((prop, key) => {
              if (prop.redirect) {
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
              }
              else {
                return (
                  <Route exact path={prop.path} component={prop.component} key={key} />
                );
              }
            })
          }
        </Switch>
      </Router>
    </PageTemplate>
  );
}

export default App;
