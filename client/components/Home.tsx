import Frame from './Frame'
import Header from './Header'
import SongDetails from './SongDetails'
import SongFinder from './SongFinder'

function Home() {
  return (
    <>
      <Header />
      <Frame image="/images/dg_crop.jpg" />
      <SongFinder />
      <SongDetails />
    </>
  )
}

export default Home
