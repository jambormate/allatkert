import type { CardFormat } from "../types/CardFormat";

function Card(props: CardFormat) {
    return (
        <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100">
          <h2>{props.title}</h2>
          <div className="card">
            <div className="card-body">
              <h3>{props.card_title}</h3>
              <p>{props.first}</p>
              <p><strong>{props.vesz}</strong>{props.other[0]}</p>
              <p><strong>{props.kedvenc}</strong>{props.other[1]}</p>
            </div>
          </div>
        </div>
    )
}
export default Card