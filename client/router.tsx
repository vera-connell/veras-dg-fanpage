import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import SongsList from './components/SongsList'
import SongInfo from './components/SongInfo'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/songs" element={<SongsList />} />
      <Route path="/songs/:search" element={<SongInfo />} />
    </Route>
  )
)

export default router
