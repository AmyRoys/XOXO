import './App.css'
import Header from './header'
import Content from './Content'
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
