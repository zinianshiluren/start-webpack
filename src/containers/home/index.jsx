import React, {Component} from "react";
import './index.scss'


export default class Home extends Component {
    render(){
        const { goNextPage } = this.props
        return(
            <div className="home-container">
                <div className="home-title">
                    <div className="home-content">
                        <div className="home-house"></div>
                        <div className="home-superman"></div>
                        <div className="home-button" onClick={goNextPage}></div>
                    </div>
                </div>
            </div>
        )
    }
}
