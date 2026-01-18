import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import ContactInfo from "../pages/ContactInfo/ContactInfo";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import FAQSection from "../pages/FAQ/FAQSection/FaqSection";
import ForAdoptionForm from "../pages/AdoptionDropdown/ForAdoption/ForAdoptionForm";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import BuyerDashboard from "../pages/dashboard/buyerDashboard/BuyerDashboard";
import BrowseAvailabePets from "../Components/BrowseAvailabePets/BrowseAvailabePets";
import GetAdoptionForm from "../pages/AdoptionDropdown/getAdoptionForm/GetAdoptionForm";
import AdoptionSuccess from "../pages/AdoptionDropdown/getAdoptionForm/AdoptionSuccess";
import Foster from "../pages/Foster/Foster";
import About from "../pages/Home/about/About";
import ServiceDetails from "../pages/Home/Services/ServiceDetails";
import Services from "../pages/Home/Services/Services";
// import Adoption from "../pages/Adoption/Adoption";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/contact",
        element: <ContactInfo></ContactInfo>,
      },
      {
        path: "/FAQ",
        element: <FAQSection></FAQSection>,
      },
      {
        path: "adoptionForm",
        element: <ForAdoptionForm></ForAdoptionForm>,
      },
      {
        path: "/browse-pets",
        Component: BrowseAvailabePets,
      },
      {
        path: "/adopt-form",
        Component: GetAdoptionForm
      },
      {
        path: "/adoption-success",
        Component: AdoptionSuccess
      },
      {
        path: "foster",
        Component: Foster
      },

      {
        path: "about",
        Component: About
      },
       {
        path: "/services", 
        element: <Services />, 
      },
   
      {
        path: "services/:serviceId",
        Component: ServiceDetails
      },
    
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      // {
      //   path:'login',
      //   Component:Login
      // },
    ],
  },
  
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
       {
    path: "/dashboardLayout",
    Component: DashboardLayout,
  },
  {
    path: "/adminDashboard",
    Component: AdminDashboard,
  },
  {
    path: "/dashboard/buyer",
    Component: BuyerDashboard,
  },
  {
    path: "/dashboard/buyer/browse",
    Component: BuyerDashboard,
  },

    ]
  }

 
]);
