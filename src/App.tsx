import { Refine } from '@pankod/refine'
import routerProvider from '@pankod/refine-nextjs-router'
import dataProvider from '@pankod/refine-simple-rest'

import '@pankod/refine/dist/styles.min.css'

const App: React.FC = () => {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider('https://api.fake-rest.refine.dev')}
      resources={[{ name: 'posts' }]}
    />
  )
}

export default App
