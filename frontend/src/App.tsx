import { Container } from '@mui/material'
import './App.css'
import Page from "./Components/page/Page.tsx";

function App() {

    return(
    <>
      <Container maxWidth={false} disableGutters>
        <Page />
      </Container>
    </>
  )
}

export default App
