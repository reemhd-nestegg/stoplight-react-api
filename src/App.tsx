import { useState } from 'react'
import API from './API'
import LoginForm from './login/LoginForm'

declare global {
  namespace JSX {
      interface IntrinsicElements {
          'elements-api': ElementsApi;
      }
  }
}

interface ElementsApi extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  apiDescriptionUrl: string,
  router: string,
  layout: string
}

function App() {
  const [openApi, setOpenAPI] = useState(false)

  return (
    <>
      {openApi ? (<API openApi={openApi} />) : ( <LoginForm onApiChange={setOpenAPI} />)}
    </>
  )
}

export default App
