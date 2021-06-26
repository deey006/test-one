import {BrowserRouter , Route, Switch} from 'react-router-dom'
import NavBar from './components/layout/navigations'
import ForEmployer from './components/layout/ForEmployer'
import  CreateAccount from './components/authentication/CreateAccount'
import signedIn from './components/authentication/signedIn'
import ResetPassword from './components/authentication/RestPassword'
import Jobs from './components/layout/jobOffers'
import PageInfo from './components/layout/jobInfoPage'

function App() {
  return (
  <BrowserRouter> 
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path='/' component={Jobs} />
      <Route path='/ForEmployer' component={ForEmployer} />
      <Route path='/CreateAccount' component={CreateAccount} />
      <Route path='/Signedin' component={signedIn} />
      <Route path='/rest-password' component={ResetPassword} />
      <Route path='/job-info' component={PageInfo} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
