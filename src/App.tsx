import Layout from './components/Layout';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import TopAnimePage from './pages/TopAnimePage';
import SeasonalAnimePage from './pages/SeasonalAnimePage';
import AnimePage from './pages/AnimePage';
import ErrorPage from './pages/ErrorPage';
import SearchAnimePage from './pages/SearchAnimePage';
import {
  fetchAnime,
  fetchSearchAnime,
  fetchSeasonalAnime,
  fetchTopAnime,
} from './utils/loaders';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/top',
            element: <TopAnimePage />,
            loader: async ({ request }) => {
              const url = new URL(request.url);
              const page = url.searchParams.get('page');
              return fetchTopAnime(page);
            },
          },
          {
            path: '/season',
            element: <SeasonalAnimePage />,
            loader: async ({ request }) => {
              const url = new URL(request.url);
              const page = url.searchParams.get('page');
              return fetchSeasonalAnime(page);
            },
          },
          {
            path: '/search',
            element: <SearchAnimePage />,
            loader: async ({ request }) => {
              const url = new URL(request.url);
              const query = url.searchParams.get('q');
              const page = url.searchParams.get('page');
              return fetchSearchAnime(query, page);
            },
          },
          {
            path: '/animes/:id',
            element: <AnimePage />,
            loader: async ({ params }) => fetchAnime(params.id || '1'),
          },
          { path: '*', element: <Navigate to="/top" replace /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
