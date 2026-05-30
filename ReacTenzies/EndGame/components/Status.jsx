export default function Status(props) {
    const text1 = props.gameStatus ? "Congratulations!!" : "Game over !!"
    const text2 = props.gameStatus ? "You won the game!!" : "Better Luck Next Time!!"

    const styles={
        color: props.gameStatus ? "green" : "red",
        border: props.gameStatus ? "2px solid green" : "2px solid red",
        backgroundColor: props.gameStatus ? "lightgreen" : "lightcoral",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        width: "300px",
        height: "70px"
    }
    
    return (
        <>
            <div className="status" style={styles}>
                <h3>{text1}</h3>
                <h3>{text2}</h3>
            </div>
        </>
    )
}
