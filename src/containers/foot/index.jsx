import React,{Component} from "react";
import "./index.scss"

export default class Foot extends Component {
    render(){
        const { goNext,cancel } = this.props
        return (
            <div className="foot-export-div">
                <div className="foot-left" onClick={ cancel }></div>
                <div className="foot-right" onClick={ goNext }></div>
            </div>
        )
    }
}
