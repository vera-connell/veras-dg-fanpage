import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import SongDetails from './components/SongDetails'
import SongsList from './components/SongsList'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/songs" element={<SongsList />} />
      <Route path="/songs/:search" element={<SongDetails />} />
    </Route>
  )
)

export default router
