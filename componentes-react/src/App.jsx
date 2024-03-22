import './App.css'
import Header from './components/Header/Header'
import FormContato from './components/formContato/FormContato'

function App() {
  
  return (
    <>
      <Header/>
      <section id="info">
        <ConteudoPrincipal/>
      </section>
      <FormContato/>
      <Footer/>
    </>
  )
}

export default App
