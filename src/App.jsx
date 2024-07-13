import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import store from "./redux/store";
import { Suspense, lazy } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() => import("./components/HomePage/HomePage.jsx"));
const Header = lazy(() => import("./components/Header.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const BrowseHomePage = lazy(() =>
  import("./components/BrowseMovieTv/HomePage/BrowseHomePage.jsx")
);
const BrowsePageHeader = lazy(() =>
  import("./components/BrowseMovieTv/BrowsePageHeader.jsx")
);
const MoviesLayout = lazy(() =>
  import("./components/BrowseMovieTv/MoviesPage/MoviesLayout.jsx")
);
const DetailedMovie = lazy(() =>
  import(
    "./components/BrowseMovieTv/MoviesPage/detailed-movie-page/DetailedMovie"
  )
);
const TvSeriesLayout = lazy(() =>
  import("./components/BrowseMovieTv/TvSeriesPage/TvSeriesLayout")
);
const DetailedTvSeries = lazy(() =>
  import(
    "./components/BrowseMovieTv/TvSeriesPage/detailed-tv-page/DetailedTvSeries.jsx"
  )
);
const DetailedTvSeasons = lazy(() =>
  import(
    "./components/BrowseMovieTv/TvSeasons/detailed-tvseasons-page/DetailedTvSeasons.jsx"
  )
);
const TvSeasons = lazy(() =>
  import("./components/BrowseMovieTv/TvSeasons/TvSeasons.jsx")
);
const SearchPage = lazy(() => import("./components/SearchResults/SearchPage"));

const AppLayout = () => {
  return (
    <div className="w-[100%] min-h-screen bg-black ">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />

        <Outlet />
        <Footer />
      </Suspense>
    </div>
  );
};

const BrowseAppLayout = () => {
  return (
    <div className="min-h-screen bg-black w-[100%] ">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowsePageHeader />
        <div className="py-[5%]">
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },

  {
    path: "/browse-movie-tv",
    element: <BrowseAppLayout />,
    children: [
      {
        path: "/browse-movie-tv",
        element: <BrowseHomePage />,
      },
      {
        path: "/browse-movie-tv/movies",
        element: <MoviesLayout />,
      },
      {
        path: "/browse-movie-tv/movie-details/:movieId",
        element: <DetailedMovie />,
      },
      {
        path: "/browse-movie-tv/tvseries",
        element: <TvSeriesLayout />,
      },
      {
        path: "/browse-movie-tv/tvseries-details/:tvSeriesId",
        element: <DetailedTvSeries />,
      },
      {
        path: "/browse-movie-tv/tv-seasons/:tvSeriesId",
        element: <TvSeasons />,
      },

      {
        path: "/browse-movie-tv/tv-series/:tvSeriesId/season/:seasonId",
        element: <DetailedTvSeasons />,
      },
      { path: "/browse-movie-tv/search", element: <SearchPage /> },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
