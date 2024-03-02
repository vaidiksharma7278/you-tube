import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Mainbody from './components/Mainbody';
import Sidebar from './components/Sidebar';
import store from './utils/store';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import WatchPage from './components/WatchPage';

const appRouter=createBrowserRouter(
  [
    {path:'/',
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<Mainbody/>
        },
        {
          path:"watch",
          element:<WatchPage/>
        }
      ]
  }
  ]
)
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Header/>
    <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
