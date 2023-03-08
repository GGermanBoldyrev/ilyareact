import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

/* Routes imports */
import Root from "./routes/root";
import Home from "./routes/home";
import About from "./routes/about";
import Works from "./routes/works";
import Contacts from "./routes/contacts";

/* Error page */
import Error from "./routes/error";

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