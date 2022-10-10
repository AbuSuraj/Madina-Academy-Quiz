import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './compnents/Home/Home';
import Statistics from './compnents/Statistics/Statistics';
import Blog from './compnents/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:"/home",
          
          element:<Home></Home>
        },
        {
          path:"/statistics",
          element:<Statistics></Statistics>
        },
        {
          path:"/blog",
          element: <Blog></Blog>
        },
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
