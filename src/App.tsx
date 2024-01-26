import './App.css'
import Header from './header'
import Content from './Content'
import Navbar from './Navbar'

function App() {
  
  return (
    <>
     <div className="app-container">
        <Header />
        <div className="content-left">
          <Navbar />
        </div>

        <div className="content-left">
          <Content />
        </div>
      </div>
    </>
  )
}

export default App
