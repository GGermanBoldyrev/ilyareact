import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

/* Routes imports */
import Root from "./routes/root/root";
import Home from "./routes/home/home";
import About from "./routes/about/about";
import Works from "./routes/works/works";
import Contacts from "./routes/contacts/contacts";

/* Error page */
import Error from "./routes/error/error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "works",
                element: <Works />,
            },
            {
                path: "contacts",
                element: <Contacts />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);