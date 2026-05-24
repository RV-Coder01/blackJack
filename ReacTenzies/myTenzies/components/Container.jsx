import React from "react"
import Die from "./Die"

export default function Container() {
    const [dice, setDice] = React.useState(generate())
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
                oldDie.id == id ? { ...oldDie, isHeld: !oldDie.isHeld } : oldDie
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
        setDice(oldDice => {
            return (
                oldDice.map(oldDie => {
                    return oldDie.isHeld ?
                        oldDie :
                        { ...oldDie, value:Math.ceil(Math.random() * 6) }
                })
            )
        })
    }

    return (
        <>
            <div className="container">
                {diceElements}
            </div>
            <button id="btn" onClick={Roll}>Roll</button>
        </>

    )
}