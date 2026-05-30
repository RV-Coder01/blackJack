import languages from "../material/languages"

export default function LanguageList() {
    const Element=languages.map(language =>{
        const styles={
            backgroundColor: language.backgroundColor,
            color: language.color
        }
        return(
            <button className="language" style={styles}>
                {language.name}
            </button>
        )
    })

    return(
        <div className="language-list">
            {Element}
        </div>
    )
}