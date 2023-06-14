import Frame from './Frame'
import Header from './Header'
import ClickHere from './ClickHere'
import SongFinder from './SongFinder'
import SongDetails from './SongDetails'

function Home() {
  return (
    <>
      <Header />
      <ClickHere />
      <Frame image="/images/dg_crop.jpg" />
      <SongFinder />
      <SongDetails />
    </>
  )
}

export default Home
