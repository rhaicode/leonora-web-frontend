import { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// components
const HomeView = lazy(() => import("@views/HomeView"));
const LoginView = lazy(() => import("@views/LoginView"));

// loaders
import { HomeViewLoader } from "@views/HomeView";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomeView />} loader={HomeViewLoader} />
      <Route path="login" element={<LoginView />} />
    </Route>
  )
);

export default router;
