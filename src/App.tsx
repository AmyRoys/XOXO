import './App.css'
import Header from './components/header'
import Content from './components/Content'
import Navbar from './Navbar'

function App() {
  
  return (
    <>
     <div className="app-container">
        <Header />
        <div className="centre-container">
          <Navbar />
          <Content />
        </div>
      </div>
    </>
  )
}

export default App
