
import './card.css';

function Card(props) {
  
  return (
    <div className="card">
        <div style={{color:props.colortitulo}}>
            <h3>{props.title}</h3>
        </div>
        <div style={{color:props.colortexto}}>
            {props.text}
            {props.flag ==='true' && <button type="button">Click Me!</button>}
        </div>
    </div>
  );
}

export default Card;
