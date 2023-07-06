import { useEffect, useState } from 'react';
import './App.css'
import deco from '/pattern-divider-desktop.svg';
function App() {
  const [adviceContent, setAdviceContent] = useState('')
  const [idAdvice, setIdAdvice] = useState('')

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json()).then(data => {
      setAdviceContent(data.slip.advice),
      setIdAdvice(data.slip.id)
    })
  },[])

  function generat(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json()).then(data => {
      setAdviceContent(data.slip.advice),
      setIdAdvice(data.slip.id)
    })
  }
  return (
    
    <>
    <main className="container">
    <span id="advice">ADVICE #{idAdvice}</span>
    <p className="content">
    “{adviceContent}” 
    </p>
    <img className='deco' src={deco} alt="pause" />
   <button className='btn' onClick={generat} title='click to generate tip' type="button"></button>
    </main>
 
<div className="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="https://github.com/leandromendes25/leandromendes25">Leandro Mendes</a>.
</div>
    </>
  )
}

export default App
