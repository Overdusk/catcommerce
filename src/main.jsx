import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

import './cssReset.css';
import Layout from './components/Layout/Layout.jsx';
import Landing from './routes/Landing/Landing.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: 
            <Layout />
        ,
        children: [
            {
                path:'/',
               element: <Landing />
            }
        ]
    }
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
