import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Container from './components/Container/Container'

function App() {
  return (
    // flex column and min-h-screen keeps footer at the bottom even on short pages
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Container />
      </main>
      <Footer />
    </div>
  )
}

export default App
