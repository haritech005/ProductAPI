import {Outlet} from 'react-router-dom'
import NavebarPanel from './NavebarPanel'
import store from '../store/store'
import {Provider} from 'react-redux'
const RootLayout = () => {
  return (
    <>
     <Provider store={store}>
    <NavebarPanel/>
    <main>
      {/* used within the parent route element to indicate where a child route element should be rendered. */}
      <Outlet/>  
    </main>
    </Provider>
    </>
  )
}

export default RootLayout