import type { ListFormat } from "../types/ListFormat";

function List(props: ListFormat) {
    return (
        <div className="col-sm-4 kartya mb-2">
            <h2>{props.title}</h2>

            {props.numbered ? (
                <ol className="list-group list-group-numbered">
                    {props.items.map((item, index) => (
                        <li className="list-group-item" key={index}>
                            {item}
                        </li>
                    ))}
                </ol>
            ) : (
                <ul className="list-group">
                    {props.items.map((item, index) => (
                        <li className="list-group-item" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default List