import React from 'react';
import './App.css';
import Homescreen from "./screens/Homescreen";
import{ BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loginscreen from './screens/Loginscreen';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector} from "react-redux"
import { login, logout, selectuser } from './features/userSlice';
import Profilescreen from './screens/Profilescreen';


function App() {
  const user= useSelector(selectuser);
  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
       dispatch(
        login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
       )
      }
      else {
        //logged out      }
        dispatch(logout());
    }
  });
  return unsubscribe;
  }, [dispatch]);


  return (
    <div className="app">
    <Router>
      {!user ? (
          <Loginscreen />) :
          (

        <Switch>
         <Route path='/profile'>
            <Profilescreen/>
         </Route>
         <Route exact path="/">
            <Homescreen />
          </Route>
        </Switch>
        )}
    </Router>
    </div>
  );
}
export default App;
