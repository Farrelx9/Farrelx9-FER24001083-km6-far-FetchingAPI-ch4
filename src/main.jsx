import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import DetailMovie from "./Pages/DetailMovie.jsx";
import SearchResult from "./Pages/SearchResult.jsx";
import MoviePopularMain from "./Pages/MoviePopularMain.jsx";
import NowPlayingMain from "./Pages/NowPlayingMain.jsx";
import TopRatedMain from "./Pages/TopRatedMain.jsx";
import UpComingMain from "./Pages/UpcomingMain.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/src",
    element: <SearchResult />,
  },
  {
    path: "/DetailMovie/:id",
    element: <DetailMovie />,
  },
  {
    path: "/Popular",
    element: <MoviePopularMain />,
  },
  {
    path: "/NowPlaying",
    element: <NowPlayingMain />,
  },
  {
    path: "/TopRated",
    element: <TopRatedMain />,
  },
  {
    path: "/UpComing",
    element: <UpComingMain />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
