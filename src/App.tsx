import React from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard, { Movielist, TaskLoader } from "./pages/Dashboard";
import Movies, { MovieLoader } from "./pages/Movies";
import Shows, { ShowLoader } from "./pages/Shows";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SearchPage from "./pages/SearchPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} loader={TaskLoader} />
          <Route path="movies" element={<Movies />} loader={MovieLoader} />
          <Route path="shows" element={<Shows />} loader={ShowLoader} />
        </Route>
        <Route path="signup/" element={<SignUp />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        <Route path="signin/" element={<SignIn />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        <Route path="search" element={<SearchPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
