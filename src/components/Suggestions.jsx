export default function Suggestions(props){
    return (
        <section className="suggestion-item">
            <img src={props.icon} alt="icon"></img>
            <span>{props.option}</span>
        </section>
    )
}