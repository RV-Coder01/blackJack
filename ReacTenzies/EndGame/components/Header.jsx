export default function Header(props) {
    return (
        <header>
            <h1>Assembly:Game</h1>
            <h4>{props.wrongCase >0  ? `Guess the word in under ${props.wrongCase}  attempts to keep the programming world safe from Assembly!` :undefined}</h4>
        </header>
    )
}
