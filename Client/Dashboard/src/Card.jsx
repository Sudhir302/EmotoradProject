import "./Card.css";

function Card({icon, text, num}){
    return(
        <div id="card">
            <p>{icon}</p>
            <p>{text}</p>
            <p style={{fontWeight: "bold"}}>{num}</p>
        </div>
    )
}

export default Card; 