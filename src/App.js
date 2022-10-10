import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './compnents/Home/Home';
import Statistics from './compnents/Statistics/Statistics';
import Blog from './compnents/Blog/Blog';
import TopicWiseQus from './compnents/TopicWiseQus/TopicWiseQus';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      loader: async() =>{
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      children:[
        {
          path:"/",
          // loader: async() =>{
          //   return fetch('https://openapi.programming-hero.com/api/quiz')
          // },
          element:<Home></Home>
        },
                {
          path:"/home",
          loader: async() =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Home></Home>
        },
        {
          path:'/quiz/:quizId',
          loader: async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<TopicWiseQus></TopicWiseQus>
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
