import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Body from './pages/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store';


function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },{
      path: '/Body',
      element: <Body />
    }
  ])
  return (
    <Provider store={store} >
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
