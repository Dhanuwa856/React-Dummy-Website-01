import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About/About";
import Testimonial from "./Pages/Testimonial/Testimonial.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Property from "./Pages/Property/Property.jsx";

const router = createBrowserRouter([
  {
    path: "/React-Dummy-Website-01/",
    element: <App />,
  },
  {
    path: "/React-Dummy-Website-01/about",
    element: <About />,
  },
  {
    path: "/React-Dummy-Website-01/property",
    element: <Property />,
  },
  {
    path: "/React-Dummy-Website-01/pages",
    element: <Testimonial />,
  },
  {
    path: "/React-Dummy-Website-01/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
