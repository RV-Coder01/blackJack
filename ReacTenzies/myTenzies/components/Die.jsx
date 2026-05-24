export default function Die(props) {
    const styles = {
        backgroundColor: props.num.isHeld ? "#59E391" : "red"
    }
    return (
        <>
            <button
                style={styles}
                key={props.num.id}
                id="btn"
                onClick={props.toggleDie} >
                {props.num.value}
            </button>
        </>
    )
}