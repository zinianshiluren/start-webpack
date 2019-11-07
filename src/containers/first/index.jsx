import React,{Component} from "react";
import Foot from '../foot/index.jsx'
import './index.scss'
import child0 from '../../resource/pic/first/childaction1.gif'
import child1 from '../../resource/pic/first/childaction2.gif'
import child2 from '../../resource/pic/first/childaction3.gif'
import child3 from '../../resource/pic/first/childaction4.gif'

class First extends Component {

    state = {
        childList : [1,2,3,4],
        choose : null,
    }

    render(){
        let arr = [child0, child1, child2, child3];
        const { childList,choose } = this.state
        const { goNextPage,goCancel } = this.props
        return (
            <div>
                <div className="first-dialog"></div>
                <div>
                    <div className="first-container">
                        {choose!=null&&
                        <img src={arr[choose]} width={"420px"}/>
                        }
                    </div>
                </div>
                <div className="first-flex">
                    {childList.map((item,index) => {
                        return (
                            <div key={item}><img src={arr[index]} width={"220px"} onClick={()=>{this.setState({choose:index})}}/></div>
                        )
                    })}
                </div>
                <div></div>
                <Foot goNext={ goNextPage } cancel={ goCancel }/>
            </div>
        )
    }
}

export default First;
