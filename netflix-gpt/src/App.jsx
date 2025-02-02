import Body from './components/Body'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './components/Login';
import UserSignOption from './utils/UserSignOption';

function App() {
  
 
 

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Body/>
    },
    {
      path : "/login",
      element: <UserSignOption.Provider value={{isSignIn : true}}><Login/></UserSignOption.Provider>
    }
  ]);


  return (
    <div>
        
        <RouterProvider router={appRouter}/>
    
    </div>
  )
}

export default App
