import React from 'react';
import {render} from 'react-dom';
// import {snapshot} from 'rrweb-snapshot';
import './index.css'
import  Home from './containers/home/index.jsx'
import  Predraw from './containers/Predraw/index.jsx'
import  First from './containers/first/index.jsx'
import {record} from 'rrweb'
import API from './api/api.js'

class HelloMessage extends React.Component {

    state = {
        // node:undefined,
        // idNodeMap:undefined,
        page : -1,
        count : 0,
    }

    events = []

    componentDidMount =()=> {
        let events = this.events
        document.title = '营救计划'
        let stopFn = record({
            emit(event) {
                events.push(event);
                if (events.length > 100) {
                    // 当事件数量大于 100 时停止录制
                    stopFn();
                }
            },
        });
        setInterval(this.save, 10 * 1000);
    }

    snapshot = ()=> {

        console.log('node',node)
        console.log('idNodeMap',idNodeMap)


        // this.setState({node:node,idNodeMap:idNodeMap})
    }


// // save 函数用于将 events 发送至后端存入，并重置 events 数组
    save =async ()=> {
        console.log(this.events)
        let data = await API.getRecord()
        // navigator.sendBeacon('https://www.jianshu.com/', this.events);
        this.events = []
    }

    getContent = () =>{
        if (this.state.page==-1) {
            return <Home goNextPage={ this.goNextPage } setCount={ this.setCount } getCount={ this.getContent } goCancel={ this.goCancel }/>
        }
        if (this.state.page==0){
            return <Predraw goNextPage={ this.goNextPage } setCount={ this.setCount } getCount={ this.getContent } goCancel={ this.goCancel }/>
        }
        if (this.state.page==1){
            return <First goNextPage={ this.goNextPage } setCount={ this.setCount } getCount={ this.getContent } goCancel={ this.goCancel }/>
        }
        // if (this.state.page==2){
        //     return <Second goNextPage={ this.goNextPage } setCount={ this.setCount } getCount={ this.getContent } goCancel={ this.goCancel }/>
        // }
    }

    setCount =(e)=>{
        let  count  = this.state.count
        count = count + e
        this.setState({ count : count })
    }
    getCount =()=>{
        return this.state.count
    }
    goNextPage =()=>{
        let { page } = this.state
        page++
        this.setState({ page:page })
    }
    goCancel =()=>{
        let  page  = this.state.page
        page--
        this.setState({ page:page})
    }

    render() {
        return (
            <div className="main">
                {this.getContent()}
            </div>
        );
    }
}

var root = document.createElement('div');
document.body.appendChild(root);

render(<HelloMessage />, root);
