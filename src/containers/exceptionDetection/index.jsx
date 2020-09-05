import React from "react";
import echarts from "echarts";
import { Button, Select } from "antd";
const { Option } = Select;
import { Typography } from "antd";
import { alg_scores } from "../../json/index.js";
import datas from "../../json/singleLabel.js";
const { Title } = Typography;

export default class DataImport extends React.Component {
  renderGraph = e => {
    console.log("e", e);
    let alg = e;
    if (!alg) {
      return;
    }
    let data = Object.keys(datas)
      .slice(0, 1000)
      .map(e => datas[e][alg]);
    console.log("data", data);
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById("main"));
    // 绘制图表
    let option = {
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
    this.renderGraph("ABOD_scores");
  }

  render() {
    let alg_scoresOption = alg_scores.map(e => <Option value={e}>{e}</Option>);
    return (
      <div className="content">
        <Title>异常得分</Title>
        <div className="header">
          <div className="wrapper-btn">
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="选择算法"
              optionFilterProp="children"
              onChange={this.renderGraph}
            >
              {alg_scoresOption}
            </Select>
          </div>
        </div>
        <div id="main" className="graph" />
      </div>
    );
  }
}
