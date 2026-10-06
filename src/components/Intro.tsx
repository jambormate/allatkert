import { type IntroFormat } from "../types/IntroFormat";

function Intro(props: IntroFormat) {
    return (
        <div className="row mb-2">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              {props.header}
            </div>
            <div className="card-body">
              {props.text.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}

export default Intro