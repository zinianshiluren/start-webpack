import React,{Component} from "react";
import Foot from "../foot/index.jsx"
import './index.scss'

class Index extends Component {
    componentDidMount(){
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.lineWidth = 6.0;
        canvas.addEventListener('touchstart',function(event){//触摸点按下事件
            if (event.targetTouches.length == 1) {
                var touch = event.targetTouches[0];
                ctx.beginPath();
                ctx.moveTo(touch.clientX-canvas.offsetLeft,touch.clientY-canvas.offsetTop);
                canvas.addEventListener('touchmove',function (event) {//手机拖动触摸点事件
                    var touche = event.targetTouches[0];
                    ctx.lineTo(touche.clientX - canvas.offsetLeft, touche.clientY - canvas.offsetTop);
                    ctx.stroke();
                },false)
                canvas.addEventListener('touchend',function (event) {//手机离开屏幕的事件
                    ctx.closePath();
                },false)
            }
        },false)
    }

    render(){
        const { goNextPage,goCancel } = this.props
        return (
            <div>

                <div className="predraw-block"></div>
                <div className="dialog-predraw"></div>
                <div className="predraw-block"></div>
                <div className="canvas-predraw">
                    <canvas id="canvas" width="554" height="683" >
                        <span>亲，您的浏览器不支持canvas，换个浏览器试试吧！</span>
                    </canvas>
                </div>

                <Foot goNext={ goNextPage } cancel={ goCancel }/>
            </div>
        )
    }
}

export default Index;
