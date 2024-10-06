import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'

import Layout from './routes/layout/layout'
import Home from './routes/homePage/homePage'
import Hackathon from './routes/hackathonPage/hackathonPage'
import Coding from './routes/codingPage/codingPage'
import Team from './routes/teamPage/teamPage'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, 
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/hackathon",
          element: <Hackathon />
        },
        {
          path: "/coding",
          element: <Coding />
        },
        {
          path: "/team",
          element: <Team />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}


export default App
