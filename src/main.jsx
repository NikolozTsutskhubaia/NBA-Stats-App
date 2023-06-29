import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import SeasonLeaders from "./pages/SeasonLeaders.jsx";
import Players from "./pages/Players.jsx";
import Teams from "./pages/Teams.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/players",
    element: <Players />,
  },
  {
    path: "/season_leaders",
    element: <SeasonLeaders />,
  },
  {
    path: "/teams",
    element: <Teams />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
