import React from "react";
import echarts from "echarts";
import { Button, Select } from "antd";
const { Option } = Select;
import { Typography } from "antd";
const { Title } = Typography;
import { feature } from "../../json/index.js";
import datas from "../../json/singleLabel.js";

export default class DataImport extends React.Component {
  state = {
    feature: null
  };
  renderGraph = e => {
    console.log("e", e);
    let feature = e;
    if (!feature) {
      return;
    }
    let data = Object.keys(datas)
      .slice(0, 1000)
      .map(e => datas[e][feature]);
    console.log("data", data);
    let myChart = echarts.init(document.getElementById("main"));
    // 绘制图表
    let option = {
      title: {
        text: "数据分析"
      },
      tooltip: {
        trigger: "axis"
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: Object.keys(datas).slice(0, 1000)
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: e,
          type: "line",
          stack: "总量",
          data: data
        }
      ]
    };

    myChart.setOption(option);
  };
  componentDidMount() {
    this.renderGraph("T1");
  }

  render() {
    let featureOption = feature.map(e => <Option value={e}>{e}</Option>);
    return (
      <div className="content">
        <Title>时间走势图</Title>
        <div className="header">
          <div className="wrapper-btn">
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="选择特征"
              optionFilterProp="children"
              onChange={this.renderGraph}
            >
              {featureOption}
            </Select>
          </div>
        </div>
        <div id="main" className="graph" />
      </div>
    );
  }
}
