import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Layout/MainLayout';
import Home from './components/Home/Home';
import Register from './components/SharedPage/Register/Register';
import Login from './components/SharedPage/Login/Login';
import AuthProvider from './Routes/Provider/AuthProvider';
import CreateAssignment from './components/CourseCreation/CreateAssignment';
import MyAssignment from './components/SharedPage/MyAssignment';
import PrivateRoutes from './Routes/PrivateRoutes';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/course')
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'createAssignment/:id',
        element:<CreateAssignment></CreateAssignment>,
        loader: ({params})=> fetch(`http://localhost:5000/course/${params.id}`)
      },
      {
        path:'myAssignment',
        element: <PrivateRoutes><MyAssignment></MyAssignment></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
