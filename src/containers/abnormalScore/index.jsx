import React from "react";
import echarts from 'echarts';
import {Button, Select} from "antd";
const { Option } = Select;
import { Typography } from 'antd';
const { Title } = Typography;

export default class DataImport extends React.Component {

    renderGraph = ()=> {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('main'));
// 绘制图表
        let option = {
            title: {
                text: '数据分析'
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };

        myChart.setOption(option);
    }
    componentDidMount() {


    }

    render() {
        return (
            <div className="content">
                <Title>异常得分</Title>
                <div className="header">
                    <div className="wrapper-btn">
                        <Button onClick={this.renderGraph} type="ghost">得分展示</Button>
                    </div>
                </div>
                <div id="main" className="graph"/>
            </div>

        )
    }
}