import './App.css'
import Header from './header'
import Content from './Content'
import Navbar from './Navbar'

function App() {
  

  return (
    <>
      <Header />
      <Navbar />
      <div className="content-left">
        <Content />
      </div>
    </>
  )
}

export default App
