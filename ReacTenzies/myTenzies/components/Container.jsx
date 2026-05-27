import React from "react"
import Die from "./Die"
// import Confetti from "react-confetti"

export default function Container() {
    const [dice, setDice] = React.useState(generate())
    const [chance, setChance] = React.useState(0)

    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)

    const bttnText = gameWon ? "New Game" : "Roll"

    // const { width, height } = useWindowSize();

    function generate() {
        const arr = []
        for (let i = 0; i < 10; i++) {
            arr.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: i
            })
        }
        return arr
    }

    function toggleDie(id) {
        setDice(oldDice => {
            return oldDice.map(oldDie =>
                oldDie.id == id ? { ...oldDie, isHeld: oldDie.isHeld ? oldDie.isHeld : !oldDie.isHeld } : oldDie
            )
        })
    }

    const diceElements = dice.map(num => {
        return <Die
            num={num}
            toggleDie={() => toggleDie(num.id)} />
    }
    )

    function Roll() {
        if (!gameWon) {
            setChance(oldChance => oldChance + 1)
            setDice(oldDice => {
                return (
                    oldDice.map(oldDie => {
                        return oldDie.isHeld ?
                            oldDie :
                            { ...oldDie, value: Math.ceil(Math.random() * 6) }
                    })
                )
            })
        }
        else {
            setChance(0)
            setDice(generate())
        }
    }

    return (
        <>
            {/* {gameWon && <Confetti  width={width} height={height} />} */}
            <div className="container">
                {diceElements}
            </div>
            <h2>{gameWon ? `You took ${chance} to win` :`You did used ${chance} till the time!!`}</h2>
            <button id="btn" onClick={Roll}>{bttnText}</button>
        </>

    )
}