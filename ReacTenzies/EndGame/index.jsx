import { createRoot } from 'react-dom/client'
import React from "react"
import Header from "./components/Header"
import Status from "./components/Status"
import LanguageList from "./components/LanguageList"
import languages from "./material/languages"


const root = createRoot(document.getElementById('root'))

export default function Index() {
    const random= Math.ceil(Math.random()*6)
    const [guessedWord, setGuessedWord] = React.useState([])
    const [currentWord, setCurrentWord] = React.useState(languages[random].name.toLowerCase())
    let wrongCase= 8 - guessedWord.filter(letter => !currentWord.includes(letter)).length
    let correctCase=guessedWord.filter(letter => currentWord.includes(letter)).length

    const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
    const gameWon = currentWord
    .split("")
    .every(letter => guessedWord.includes(letter));


    const alphaEach = alpha.map(char => {
        const isGuessed = guessedWord.includes(char)
        const isCorrect = isGuessed && currentWord.includes(char.toLowerCase())
        const isWrong = isGuessed && !currentWord.includes(char.toLowerCase())
        // wrongCase = isWrong ? wrongCase-1 : wrongCase
        // correctCase = isCorrect ? correctCase+1 : correctCase
        // if (correctCase === currentWord.length && wrongCase>=0 ){
        //     setGameWon(true)
        // }
        return (
            <button
                style={{ backgroundColor: isGuessed ? isCorrect ? "green" : "red" : "orange" }}
                id="key-alpha"
                key={char}
                onClick={() => toggle(char)}>
                {char.toUpperCase()}
            </button>)
    })

    const wordElements = currentWord.split("").map(letter => {
        return(
            guessedWord.includes(letter) ? <span id="wordElement">{letter.toUpperCase()}</span>: <span id="wordElement"></span>
        )
    }
    )

    function toggle(char) {
        setGuessedWord(prev => {
            return prev.includes(char) ? prev : [...prev, char]
            // const letterSet =new Set(prev)
            // letterSet.add(char)
            // return Array.from(letterSet)
        })
    }

    function toggleNew(){
        setGuessedWord([])
        setCurrentWord(languages[Math.ceil(Math.random()*6)].name.toLowerCase())
    }


    return (
        <div id="index">
            <Header wrongCase={wrongCase} correct={correctCase === currentWord.length} />
            {wrongCase ===0 || correctCase === currentWord.length ? <Status gameStatus={gameWon}/> : undefined}
            <LanguageList />
            <section id="word">
                {wordElements}
            </section>
            <div id="keyboard">
                {alphaEach}
            </div>
            {wrongCase ===0 || correctCase === currentWord.length ? <button id="newGameBtn" onClick={toggleNew}>New Game</button> : undefined}
        </div>
    )
}

root.render(<Index />)