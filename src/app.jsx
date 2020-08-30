import React from 'react';

import './index.scss'
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
import DataImport from "./containers/importData/index.jsx";
import DataGraph from './containers/dataGraph/index.jsx'

import API from './api/api.js'
import ExceptionDetection from "./containers/exceptionDetection/index.jsx";
import {render} from "react-dom";
import AbnormalLabel from "./containers/abnormalLabel/index.jsx";

export default class App extends React.Component {

    state = {
        openKeys: ['sub1'],
        type:'',
    };

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];


    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    componentDidMount =()=> {
        console.log('xxxxx')
    }


    render() {
        console.log('xxxxxxxx')

        const { type } = this.state
        return (
            <div className="wrapper">
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    style={{ width: 256,minHeight:'100vh' }}
                    onClick={(val)=>{
                        this.setState({type: val.key})
                    }}
                >
                    <SubMenu
                        key="sub1"
                        title={<span>
                                <MailOutlined />
                                <span>数据导入</span>
                            </span>}
                    >
                        <Menu.Item key="dataImport">数据导入</Menu.Item>
                        <Menu.Item key="dataGraph">数据分析</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="异常得分">
                        <Menu.Item key="exceptionDetection">异常得分</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<AppstoreOutlined />} title="异常标注">
                        <Menu.Item key="exceptionLabel">异常标注</Menu.Item>
                    </SubMenu>

                </Menu>
                {type==='dataImport' && <DataImport/>}
                {type==='dataGraph' && <DataGraph/>}
                {type==='exceptionDetection' && <ExceptionDetection/>}
                {type==='exceptionLabel' && <AbnormalLabel/>}
            </div>

        );
    }
}


var root = document.createElement('div');
document.body.appendChild(root);

render(<App />, root);


