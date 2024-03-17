import Intro from "./Intro"
import Bar from "./Bar"
import Features from './Features'
import QandA from "./QandA"
import Footer from "./Footer"
import Info from "./Info"


function App() {

  return (
    <>
      <header>
        <Bar />
        <Intro />
      </header>
      <main>
        <Info />
        <Features />
        
        <QandA />
      </main>
      <Footer />
    </>
  )
}

export default App
