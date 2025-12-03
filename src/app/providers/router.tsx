import { RouterProvider } from 'react-router-dom'
import { router } from '../config/router'

export const Router = () => {
  return <RouterProvider router={router} />
}
