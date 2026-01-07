import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AllFAQs from "../pages/FAQ/allFAQs/AllFAQs";
import ContactInfo from "../pages/ContactInfo/ContactInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'/faqs',
        element:<AllFAQs></AllFAQs>
      },
      {
        path:'/contact',
        element:<ContactInfo></ContactInfo>
      },
    ]
  },
]);