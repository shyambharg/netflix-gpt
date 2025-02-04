import Body from './components/Body'
import {createBrowserRouter, RouterProvider, useNavigate} from 'react-router-dom'
import Login from './components/Login';
import UserSignOption from './utils/UserSignOption';
import { Provider, useDispatch } from 'react-redux'
import appStore from './utils/appStore';
import {  onAuthStateChanged } from "firebase/auth";
import {auth} from './utils/firebase';
import Browser from './components/Browser';
import { useEffect } from 'react';
import { addUser, removeUser } from './utils/userSlice';

function App() {

 

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Body/>
    },
    {
      path : "/login",
      element: <UserSignOption.Provider value={{isSignIn : true}}><Login/></UserSignOption.Provider>
    },
    {
      path : "/browse",
      element: <Browser/>
    }
  ]);

  
  return (
    <div>
        <Provider store={appStore}>
        <RouterProvider router={appRouter}/>
        </Provider>
    </div>
  )
}

export default App
