import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AllFAQs from "../pages/FAQ/allFAQs/AllFAQs";
import ContactInfo from "../pages/ContactInfo/ContactInfo";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import FAQSection from "../pages/FAQ/FAQSection/FaqSection";

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
      {
        path:'/FAQ',
        element:<FAQSection></FAQSection>
      },
    ]
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'login',
        Component:Login
      },
      // {
      //   path:'login',
      //   Component:Login
      // },
    ]
  }
]);