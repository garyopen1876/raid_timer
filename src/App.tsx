import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router'

import CrimsonCradleOfFlames from './pages/crimson-cradle-of-flames/index'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <CrimsonCradleOfFlames />,
    },
  ], {
    basename: "/raid_timer",
  });

  return (
    <RouterProvider router={router} />
  )
}

export default App
