import './App.css';
import Body from './pages/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />
    }
  ])
  return (
      <RouterProvider router={appRouter} />
  );
}

export default App;
