import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Members from './pages/Members';
import ConnectWith from './pages/ConnectWith';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'events',
        element: <Events />
      },
      {
        path: 'gallery',
        element: <Gallery />
      },
      {
        path: 'members',
        element: <Members />
      },
      {
        path: 'ConnectWith',
        element: <ConnectWith />
      }
    ]
  }
]);

export default router;
