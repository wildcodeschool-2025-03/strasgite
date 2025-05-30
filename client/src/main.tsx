// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

/* **/

// Import the main app component
import App from "./App";
import Accueil from "./pages/Accueil";
import Cgv from "./pages/Cgv";
import Connexion from "./pages/Connexion";
import Contact from "./pages/Contact";
import EspaceVisiteur from "./pages/EspaceVisiteur";
import Legal from "./pages/Legal";
import Nos_Chambres from "./pages/Nos_Chambres";
import Notre_Alsace from "./pages/Notre_Alsace";
import Order from "./pages/Order";
import Reservation from "./pages/Reservation";
import Services from "./pages/Services";

// Import additional components for new routes
// Try creating these components in the "pages" folder

// import About from "./pages/About";
// import Contact from "./pages/Contact";

/* **/

// Create router configuration with routes
// You can add more routes as you build out your app!
const router = createBrowserRouter([
  {
    element: <App />,

    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/Reservation",
        element: <Reservation />,
      },
      {
        path: "/Nos_Chambres",
        element: <Nos_Chambres />,
      },
      {
        path: "/Services",
        element: <Services />,
      },

      {
        path: "/Notre_Alsace",
        element: <Notre_Alsace />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Cgv",
        element: <Cgv />,
      },

      {
        path: "/Legal",
        element: <Legal />,
      },

      {
        path: "/Order",
        element: <Order />,
      },
      {
        path: "/LogIn",
        element: <Connexion />,
      },
      {
        path: "/EspaceVisiteur",
        element: <EspaceVisiteur />,
      },
    ],
    // Renders the App component for the home page
  },
  // Try adding a new route! For example, "/about" with an About component
]);

/* **/

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
