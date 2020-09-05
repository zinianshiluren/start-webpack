import React from "react";
import echarts from "echarts";
import { Drawer, Button } from "antd";
import { Select } from "antd";
import { Divider, Col, Row } from "antd";
import "./index.scss";
import { Input } from "antd";
import { Tag } from "antd";
import datas from "../../json/singleLabel.js";
const { TextArea } = Input;

// const data = {
//   Appliances: 30,
//   lights: 0,
//   T1: 19.79,
//   RH_1: 46.06666667,
//   T2: 19.0,
//   RH_2: 44.645,
//   T3: 20.1,
//   RH_3: 45.16333333,
//   T4: 19.03333333,
//   RH_4: 44.76666667,
//   T5: 17.89,
//   RH_5: 52.03333333,
//   T6: 4.09,
//   RH_6: 95.0,
//   T7: 17.79,
//   RH_7: 42.23,
//   T8: 18.6,
//   RH_8: 49.82666667,
//   T9: 17.03333333,
//   RH_9: 46.39,
//   T_out: 5.05,
//   Press_mm_hg: 742.55,
//   RH_out: 91.0,
//   Windspeed: 5.0,
//   Visibility: 34.5,
//   Tdewpoint: 3.65,
//   rv1: 30.24666451,
//   rv2: 30.24666451,
//   ABOD_scores: -0.0026279161,
//   ABOD_anomaly: 1,
//   AutoEncoder_scores: 4.4900013526,
//   AutoEncoder_anomaly: 0,
//   CBLOF_scores: 3.5488168399,
//   CBLOF_anomaly: 0,
//   COF_scores: 0.9747455367,
//   COF_anomaly: 0,
//   COPOD_scores: 38.444910374,
//   COPOD_anomaly: 0,
//   FeatureBagging_scores: 1.4265094717,
//   FeatureBagging_anomaly: 1,
//   HBOS_scores: 36.5548048446,
//   HBOS_anomaly: 0,
//   IForest_scores: -0.0661962688,
//   IForest_anomaly: 0,
//   KNN_scores: 2.7031648558,
//   KNN_anomaly: 1,
//   LODA_scores: 0.0199617881,
//   LODA_anomaly: 0,
//   LOF_scores: 1.3338879856,
//   LOF_anomaly: 1,
//   MCD_scores: 132.6718159518,
//   MCD_anomaly: 0,
//   MO_GAAL_scores: 0.99999475,
//   MO_GAAL_anomaly: 0,
//   OCSVM_scores: -52.0507109744,
//   OCSVM_anomaly: 0,
//   PCA_scores: 3.040255583e33,
//   PCA_anomaly: 0,
//   SOD_scores: 0.1737061279,
//   SOD_anomaly: 0,
//   SO_GAAL_scores: 0.9999995,
//   SO_GAAL_anomaly: 0,
//   SOS_scores: 0.2223513978,
//   SOS_anomaly: 0
// };

export default class SingleLabel extends React.Component {
  state = {
    showDrawer: false,
    alignInfo: {},
    alignName: "",
    featureInfo: {},
    featureName: "",
    abnormalFlag: "",
    rowIndex: 0,
    data: {}
  };

  renderGraph1 = () => {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById("main1"));
    const data = this.state.data;
    console.log("data", data);
    let graphData = Object.keys(data)
      .map((e, index) => {
        let item = {};
        item.symbolSize = Math.abs(data[e]) > 100 ? 100 : Math.abs(data[e]);
        item.attributes = { modularity_class: index };
        item.id = String(index);
        item.category = Number(Number(index / 8).toFixed());
        item.name = e;
        item.value = data[e];
        item.itemStyle = null;
        item.label = { normal: { show: true } };
        return item;
      })
      .slice(0, 28);
    console.log("graphData", graphData);

    // 绘制图表

    let categories = [
      { name: "T类传感器" },
      { name: "RH类传感器" },
      { name: "RV类传感器" },
      { name: "可用性类" },
      { name: "时序类1" },
      { name: "时序类2" },
      { name: "时序类2" },
      { name: "时序类2" }
    ];

    let links = [
      {
        id: "0",
        lineStyle: { normal: {} },
        name: null,
        source: "1",
        target: "0"
      },
      {
        id: "1",
        lineStyle: { normal: {} },
        name: null,
        source: "3",
        target: "6"
      }
    ];

    const option = {
      title: {
        text: "时序数据关系图",
        left: "center",
        align: "right"
      },
      tooltip: {},
      legend: [
        {
          data: categories.map(function (a) {
            return a.name;
          }),
          top: 35
        }
      ],
      animationDurationUpdate: 1500,
      animationEasingUpdate: "quinticInOut",
      series: [
        {
          name: "Les Miserables",
          type: "graph",
          layout: "circular",
          circular: {
            rotateLabel: true
          },
          data: graphData,
          links: links,
          categories: categories,
          roam: true,
          label: {
            position: "right",
            formatter: "{b}"
          },
          lineStyle: {
            color: "source",
            curveness: 0.3
          }
        }
      ]
    };

    myChart.setOption(option);
  };

  renderGraph2 = () => {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById("main2"));
    const data = this.state.data;
    let graphData = Object.keys(data)
      .map((e, index) => {
        let item = {};
        item.symbolSize = Math.abs(data[e]) > 100 ? 100 : Math.abs(data[e]);
        item.attributes = { modularity_class: index };
        item.id = String(index);
        item.category = Number(Number(index / 8).toFixed());
        item.name = e;
        item.value = data[e];
        item.itemStyle = null;
        item.label = { normal: { show: true } };
        return item;
      })
      .slice(28, 64);
    console.log("graphData", graphData);

    // 绘制图表

    var categories = [];
    for (var i = 0; i < 8; i++) {
      categories[i] = {
        name: "类目" + i
      };
    }

    const option = {
      title: {
        text: "异常得分与标签预测",
        left: "center",
        align: "right"
      },
      tooltip: {},
      legend: [
        {
          data: categories.map(function (a) {
            return a.name;
          }),
          top: 35
        }
      ],
      animationDurationUpdate: 1500,
      animationEasingUpdate: "quinticInOut",
      series: [
        {
          name: "Les Miserables",
          type: "graph",
          layout: "circular",
          circular: {
            rotateLabel: true
          },
          data: graphData,
          links: [],
          categories: categories,
          roam: true,
          label: {
            position: "right",
            formatter: "{b}"
          },
          lineStyle: {
            color: "source",
            curveness: 0.3
          }
        }
      ]
    };

    myChart.setOption(option);
  };

  componentDidMount() {
    this.setState({ data: datas["0"] }, () => {
      this.renderGraph1();
      this.renderGraph2();
    });
  }

  setShowDrawer = val => {
    this.setState({ showDrawer: val });
  };

  onChange = val => {
    this.setState({ alignInfo: this.algData[val], alignName: val });
  };

  onFeatureChange = val => {
    this.setState({ featureInfo: this.featureData[val], featureName: val });
  };

  algName = [
    "ABOD",
    "AutoEncoder",
    "CBLOF",
    "COF",
    "COPOD",
    "FeatureBagging",
    "HBOS",
    "IForest",
    "KNN",
    "LODA",
    "LOF",
    "MCD",
    "MO_GAAL",
    "OCSVM",
    "PCA",
    "SOD",
    "SO_GAAL",
    "SOS"
  ];

  feature = [
    "Appliances",
    "lights",
    "T1",
    "RH_1",
    "T2",
    "RH_2",
    "T3",
    "RH_3",
    "T4",
    "RH_4",
    "T5",
    "RH_5",
    "T6",
    "RH_6",
    "T7",
    "RH_7",
    "T8",
    "RH_8",
    "T9",
    "RH_9",
    "T_out",
    "Press_mm_hg",
    "RH_out",
    "Windspeed",
    "Visibility",
    "Tdewpoint",
    "rv1",
    "rv2"
  ];

  algData = {
    ABOD: {
      准确率: 0.11,
      AUC: 0.6323595506,
      精准率: 0.11,
      召回率: 0.11,
      f1: 0.1981981982
    },
    AutoEncoder: {
      准确率: 0.896,
      AUC: 0.6577834525,
      精准率: 0.5652173913,
      召回率: 0.5652173913,
      f1: 0.3333333333
    },
    CBLOF: {
      准确率: 0.747,
      AUC: 0.6286210419,
      精准率: 0.1578947368,
      召回率: 0.1578947368,
      f1: 0.2068965517
    },
    COF: {
      准确率: 0.839,
      AUC: 0.5776098059,
      精准率: 0.2782608696,
      召回率: 0.2782608696,
      f1: 0.2844444444
    },
    COPOD: {
      准确率: 0.866,
      AUC: 0.7023901941,
      精准率: 0.38,
      召回率: 0.38,
      f1: 0.3619047619
    },
    FeatureBagging: {
      准确率: 0.116,
      AUC: 0.6579366701,
      精准率: 0.1106639839,
      召回率: 0.1106639839,
      f1: 0.1992753623
    },
    HBOS: {
      准确率: 0.856,
      AUC: 0.5851430031,
      精准率: 0.0277777778,
      召回率: 0.0277777778,
      f1: 0.0136986301
    },
    IForest: {
      准确率: 0.864,
      AUC: 0.6184984678,
      精准率: 0.175,
      召回率: 0.175,
      f1: 0.0933333333
    },
    KNN: {
      准确率: 0.117,
      AUC: 0.587671093,
      精准率: 0.110775428,
      召回率: 0.110775428,
      f1: 0.199456029
    },
    LODA: {
      准确率: 0.892,
      AUC: 0.6370275792,
      精准率: 0.525,
      召回率: 0.525,
      f1: 0.28
    },
    LOF: {
      准确率: 0.122,
      AUC: 0.6528192033,
      精准率: 0.1113360324,
      召回率: 0.1113360324,
      f1: 0.2003642987
    },
    MCD: {
      准确率: 0.749,
      AUC: 0.575485189,
      精准率: 0.1894273128,
      召回率: 0.1894273128,
      f1: 0.2551928783
    },
    MO_GAAL: {
      准确率: 0.89,
      AUC: 0.5239325843,
      精准率: 0.0,
      召回率: 0.0,
      f1: 0.0
    },
    OCSVM: {
      准确率: 0.838,
      AUC: 0.6229417773,
      精准率: 0.2592592593,
      召回率: 0.2592592593,
      f1: 0.2568807339
    },
    PCA: {
      准确率: 0.896,
      AUC: 0.6577834525,
      精准率: 0.5652173913,
      召回率: 0.5652173913,
      f1: 0.3333333333
    },
    SOD: {
      准确率: 0.851,
      AUC: 0.6125025536,
      精准率: 0.3211009174,
      召回率: 0.3211009174,
      f1: 0.3196347032
    },
    SO_GAAL: {
      准确率: 0.89,
      AUC: 0.6411031665,
      精准率: 0.0,
      召回率: 0.0,
      f1: 0.0
    },
    SOS: {
      准确率: 0.841,
      AUC: 0.4776200204,
      精准率: 0.1549295775,
      召回率: 0.1549295775,
      f1: 0.1215469613
    }
  };

  featureData = {
    count: {
      Appliances: 18735.0,
      lights: 18735.0,
      T1: 18735.0,
      RH_1: 18735.0,
      T2: 18735.0,
      RH_2: 18735.0,
      T3: 18735.0,
      RH_3: 18735.0,
      T4: 18735.0,
      RH_4: 18735.0,
      T5: 18735.0,
      RH_5: 18735.0,
      T6: 18735.0,
      RH_6: 18735.0,
      T7: 18735.0,
      RH_7: 18735.0,
      T8: 18735.0,
      RH_8: 18735.0,
      T9: 18735.0,
      RH_9: 18735.0,
      T_out: 18735.0,
      Press_mm_hg: 18735.0,
      RH_out: 18735.0,
      Windspeed: 18735.0,
      Visibility: 18735.0,
      Tdewpoint: 18735.0,
      rv1: 18735.0,
      rv2: 18735.0,
      OneClassSVM_scores: 18735.0,
      OneClassSVM_anomaly: 18735.0,
      IsolationForest_scores: 18735.0,
      IsolationForest_anomaly: 18735.0,
      LOF_scores: 18735.0,
      LOF_anomaly: 18735.0
    },
    mean: {
      Appliances: 96.7061649319,
      lights: 3.7352548706,
      T1: 21.7335513113,
      RH_1: 40.2198819778,
      T2: 20.3658347697,
      RH_2: 40.4355871677,
      T3: 22.3616571632,
      RH_3: 39.0865195636,
      T4: 20.9179445288,
      RH_4: 38.9119724451,
      T5: 19.661388173,
      RH_5: 50.6751022266,
      T6: 8.2511414246,
      RH_6: 52.8223655082,
      T7: 20.3520253738,
      RH_7: 35.2171033502,
      T8: 22.1550613604,
      RH_8: 42.7568580511,
      T9: 19.6013688951,
      RH_9: 41.464808542,
      T_out: 7.7105868428,
      Press_mm_hg: 755.4711369095,
      RH_out: 79.4305577796,
      Windspeed: 4.0107018948,
      Visibility: 38.4653055778,
      Tdewpoint: 3.9840161996,
      rv1: 24.9954611288,
      rv2: 24.9954611288,
      OneClassSVM_scores: 25.2492995283,
      OneClassSVM_anomaly: 0.9600747264,
      IsolationForest_scores: 0.0579527677,
      IsolationForest_anomaly: 0.799946624,
      LOF_scores: 0.4420709126,
      LOF_anomaly: 0.9978649586
    },
    std: {
      Appliances: 100.2191570533,
      lights: 7.9095143748,
      T1: 1.600783442,
      RH_1: 4.043782029,
      T2: 2.2230392406,
      RH_2: 4.1460530961,
      T3: 2.0065680776,
      RH_3: 3.234979504,
      T4: 2.0645090203,
      RH_4: 4.3922667177,
      T5: 1.8532916994,
      RH_5: 8.943611101,
      T6: 6.0085470913,
      RH_6: 30.8915867324,
      T7: 2.120245781,
      RH_7: 5.1380173349,
      T8: 1.9105388924,
      RH_8: 5.2483090787,
      T9: 2.0004515022,
      RH_9: 4.1706481417,
      T_out: 5.2431507518,
      Press_mm_hg: 7.4406779396,
      RH_out: 15.0982522757,
      Windspeed: 2.4441296124,
      Visibility: 11.8161686463,
      Tdewpoint: 4.1248449348,
      rv1: 14.4967002478,
      rv2: 14.4967002478,
      OneClassSVM_scores: 11.7637218802,
      OneClassSVM_anomaly: 0.2797511338,
      IsolationForest_scores: 0.0411776027,
      IsolationForest_anomaly: 0.6000871768,
      LOF_scores: 0.0756389531,
      LOF_anomaly: 0.0653127248
    },
    min: {
      Appliances: 10.0,
      lights: 0.0,
      T1: 16.79,
      RH_1: 27.02333333,
      T2: 16.1,
      RH_2: 20.46333333,
      T3: 17.2,
      RH_3: 28.76666667,
      T4: 15.1,
      RH_4: 27.66,
      T5: 15.33,
      RH_5: 29.815,
      T6: -6.01,
      RH_6: 1.0,
      T7: 15.39,
      RH_7: 23.2,
      T8: 16.30666667,
      RH_8: 29.6,
      T9: 14.89,
      RH_9: 29.16666667,
      T_out: -5.0,
      Press_mm_hg: 729.3,
      RH_out: 24.0,
      Windspeed: 0.0,
      Visibility: 1.0,
      Tdewpoint: -6.2,
      rv1: 0.005321682,
      rv2: 0.005321682,
      OneClassSVM_scores: -56.0426049507,
      OneClassSVM_anomaly: -1.0,
      IsolationForest_scores: -0.0762429724,
      IsolationForest_anomaly: -1.0,
      LOF_scores: -0.2960081663,
      LOF_anomaly: -1.0
    },
    "25%": {
      Appliances: 50.0,
      lights: 0.0,
      T1: 20.79,
      RH_1: 37.2,
      T2: 18.82333333,
      RH_2: 37.76666667,
      T3: 20.89,
      RH_3: 36.79,
      T4: 19.6,
      RH_4: 35.387142855,
      T5: 18.39,
      RH_5: 45.256333335,
      T6: 3.966666667,
      RH_6: 28.06,
      T7: 18.79555556,
      RH_7: 31.29,
      T8: 21.02638889,
      RH_8: 38.86333333,
      T9: 18.2,
      RH_9: 38.46666667,
      T_out: 4.0,
      Press_mm_hg: 750.9333333,
      RH_out: 69.66666667,
      Windspeed: 2.0,
      Visibility: 29.0,
      Tdewpoint: 1.11,
      rv1: 12.49443855,
      rv2: 12.49443855,
      OneClassSVM_scores: 17.0678004934,
      OneClassSVM_anomaly: 1.0,
      IsolationForest_scores: 0.0314415583,
      IsolationForest_anomaly: 1.0,
      LOF_scores: 0.411503514,
      LOF_anomaly: 1.0
    },
    "50%": {
      Appliances: 60.0,
      lights: 0.0,
      T1: 21.6,
      RH_1: 39.53,
      T2: 20.0,
      RH_2: 40.53,
      T3: 22.2,
      RH_3: 38.4,
      T4: 20.7,
      RH_4: 38.26,
      T5: 19.5,
      RH_5: 48.79,
      T6: 7.656666667,
      RH_6: 53.73333333,
      T7: 20.2,
      RH_7: 34.59,
      T8: 22.23,
      RH_8: 42.09,
      T9: 19.5,
      RH_9: 40.736,
      T_out: 7.27,
      Press_mm_hg: 756.0,
      RH_out: 83.33333333,
      Windspeed: 3.666666667,
      Visibility: 40.0,
      Tdewpoint: 3.7,
      rv1: 24.94075316,
      rv2: 24.94075316,
      OneClassSVM_scores: 26.3086074776,
      OneClassSVM_anomaly: 1.0,
      IsolationForest_scores: 0.0628408799,
      IsolationForest_anomaly: 1.0,
      LOF_scores: 0.4652349463,
      LOF_anomaly: 1.0
    },
    "75%": {
      Appliances: 100.0,
      lights: 0.0,
      T1: 22.7,
      RH_1: 43.09,
      T2: 21.55666667,
      RH_2: 43.4,
      T3: 23.39,
      RH_3: 41.165,
      T4: 22.2,
      RH_4: 41.93333333,
      T5: 20.7,
      RH_5: 53.26,
      T6: 11.5,
      RH_6: 80.98,
      T7: 21.7,
      RH_7: 38.809333335,
      T8: 23.4725,
      RH_8: 46.286666665,
      T9: 20.7,
      RH_9: 44.2,
      T_out: 10.6,
      Press_mm_hg: 760.825,
      RH_out: 91.66666667,
      Windspeed: 5.333333333,
      Visibility: 40.0,
      Tdewpoint: 6.8,
      rv1: 37.60926549,
      rv2: 37.60926549,
      OneClassSVM_scores: 34.2501967712,
      OneClassSVM_anomaly: 1.0,
      IsolationForest_scores: 0.0891818376,
      IsolationForest_anomaly: 1.0,
      LOF_scores: 0.4954491555,
      LOF_anomaly: 1.0
    },
    max: {
      Appliances: 1070.0,
      lights: 70.0,
      T1: 26.26,
      RH_1: 63.36,
      T2: 29.85666667,
      RH_2: 56.02666667,
      T3: 29.236,
      RH_3: 50.16333333,
      T4: 26.2,
      RH_4: 51.09,
      T5: 25.795,
      RH_5: 96.32166667,
      T6: 28.29,
      RH_6: 99.9,
      T7: 26.0,
      RH_7: 51.4,
      T8: 27.23,
      RH_8: 58.78,
      T9: 24.5,
      RH_9: 53.32666667,
      T_out: 26.1,
      Press_mm_hg: 772.3,
      RH_out: 100.0,
      Windspeed: 14.0,
      Visibility: 66.0,
      Tdewpoint: 15.5,
      rv1: 49.99317296,
      rv2: 49.99317296,
      OneClassSVM_scores: 52.4643320947,
      OneClassSVM_anomaly: 1.0,
      IsolationForest_scores: 0.146291867,
      IsolationForest_anomaly: 1.0,
      LOF_scores: 0.5443681363,
      LOF_anomaly: 1.0
    }
  };

  render() {
    let algNameOption = this.algName.map(e => <Option value={e}>{e}</Option>);
    const data = this.state.data;
    console.log("data", this.state.data);
    console.log("rowIndex:", this.state.rowIndex);
    let featureOption = this.feature.map(e => <Option value={e}>{e}</Option>);
    let alignInfo = this.state.alignInfo;
    let featureName = this.state.featureName;

    return (
      <div className="content">
        <Button
          type="primary"
          onClick={() => {
            this.setShowDrawer(true);
          }}
        >
          数据标注
        </Button>
        <div className="graph-container">
          <div id="main1" className="graph-single" />
          <div id="main2" className="graph-single"></div>
        </div>
        <Drawer
          title={
            <div>
              数据标注&#12288;
              {this.state.abnormalFlag === true && <Tag color="red">异常</Tag>}
              {this.state.abnormalFlag === false && (
                <Tag color="green">正常</Tag>
              )}
            </div>
          }
          placement="right"
          maskClosable
          width={500}
          onClose={() => {
            this.setShowDrawer(false);
          }}
          visible={this.state.showDrawer}
          footer={
            <Row>
              <Col span={12} style={{ textAlign: "center" }}>
                <Button
                  size="large"
                  onClick={() => {
                    if (this.state.rowIndex === 0) {
                      return;
                    }
                    let key = String(this.state.rowIndex - 1);
                    this.setState(
                      { rowIndex: this.state.rowIndex - 1, data: datas[key] },
                      () => {
                        this.renderGraph1();
                        this.renderGraph2();
                      }
                    );
                  }}
                >
                  上一条
                </Button>
              </Col>
              <Col span={12} style={{ textAlign: "center" }}>
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    let key = String(this.state.rowIndex + 1);
                    this.setState(
                      { rowIndex: this.state.rowIndex + 1, data: datas[key] },
                      () => {
                        this.renderGraph1();
                        this.renderGraph2();
                      }
                    );
                  }}
                >
                  下一条
                </Button>
              </Col>
            </Row>
          }
        >
          <div>
            <span className={"alg-name-span"}>算法选择</span>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="算法选择"
              optionFilterProp="children"
              onChange={this.onChange}
            >
              {algNameOption}
            </Select>
          </div>
          <Divider />
          <Row>
            <Col span={12}>
              <DescriptionItem title="准确率" content={alignInfo["准确率"]} />
            </Col>
            <Col span={12}>
              <DescriptionItem title="AUC" content={alignInfo["AUC"]} />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="精准率" content={alignInfo["精准率"]} />
            </Col>
            <Col span={12}>
              <DescriptionItem title="召回率" content={alignInfo["召回率"]} />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="f1" content={alignInfo["f1"]} />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem
                title="异常标签"
                content={data[this.state.alignName + "_anomaly"]}
              />
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="异常分数"
                content={data[this.state.alignName + "_scores"]}
              />
            </Col>
          </Row>
          <Divider />
          <div>
            <span className={"alg-name-span"}>特征选择</span>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="特征选择"
              optionFilterProp="children"
              onChange={this.onFeatureChange}
            >
              {featureOption}
            </Select>
          </div>
          <Divider />
          <Row>
            <Col span={12}>
              <DescriptionItem
                title="mean"
                content={this.featureData["mean"][featureName]}
              />
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="std"
                content={this.featureData["std"][featureName]}
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem
                title="min"
                content={this.featureData["min"][featureName]}
              />
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="25%"
                content={this.featureData["25%"][featureName]}
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem
                title="50%"
                content={this.featureData["50%"][featureName]}
              />
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="75%"
                content={this.featureData["75%"][featureName]}
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem
                title="max"
                content={this.featureData["max"][featureName]}
              />
            </Col>
            <Col span={12}>
              <DescriptionItem title="数值" content={data[featureName]} />
            </Col>
          </Row>
          <Divider />

          <Row>
            <Col span={12}>
              <Button
                type="primary"
                onClick={() => {
                  this.setState({ abnormalFlag: false });
                }}
              >
                标注为正常
              </Button>
            </Col>
            <Col span={12}>
              <Button
                danger
                onClick={() => {
                  this.setState({ abnormalFlag: true });
                }}
              >
                标注为异常
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div style={{ marginTop: 15 }}>
                <TextArea rows={4} placeholder={"添加备注信息"} />
              </div>
            </Col>
          </Row>
        </Drawer>
      </div>
    );
  }
}

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);
