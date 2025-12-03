import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/pages/home'
import { CatalogPage } from '@/pages/catalog'
import { MyThingsPage } from '@/pages/my-things'
import { FittingPage } from '@/pages/fitting'
import { LooksPage } from '@/pages/looks'
import { ShoppingPage } from '@/pages/shopping'
import { Layout } from '@/app/ui/layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'catalog',
        element: <CatalogPage />,
      },
      {
        path: 'my-things',
        element: <MyThingsPage />,
      },
      {
        path: 'fitting',
        element: <FittingPage />,
      },
      {
        path: 'looks',
        element: <LooksPage />,
      },
      {
        path: 'shopping',
        element: <ShoppingPage />,
      },
    ],
  },
])
