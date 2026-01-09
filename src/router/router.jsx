import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import ContactInfo from "../pages/ContactInfo/ContactInfo";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import FAQSection from "../pages/FAQ/FAQSection/FaqSection";
import ForAdoptionForm from "../pages/AdoptionDropdown/ForAdoption/ForAdoptionForm";
// import Adoption from "../pages/Adoption/Adoption";

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
        path:'/contact',
        element:<ContactInfo></ContactInfo>
      },
      {
        path:'/FAQ',
        element:<FAQSection></FAQSection>
      },
      {
        path:'adoptionForm',
        element:<ForAdoptionForm></ForAdoptionForm>
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