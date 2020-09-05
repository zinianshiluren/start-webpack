import React from "react";
import { Select } from "antd";
const { Option } = Select;
import { Typography, Input, Row, Col, Divider, Button } from "antd";
import { algName } from "../../json/index.js";
const { Title } = Typography;

export default class DataImport extends React.Component {
  render() {
    return (
      <div className="content">
        <Title>算法参数选择</Title>

        <Row>算法一</Row>
        <Divider />
        <Row style={{ marginBottom: 10 }}>
          <Col span={12}>
            最大k值&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
          <Col span={12}>
            异常比例&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
        </Row>

        {/* 分隔線 */}
        <Divider />

        <Row>算法二</Row>
        <Divider />
        <Row style={{ marginBottom: 10 }}>
          <Col span={12}>
            最大k值&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
          <Col span={12}>
            异常比例&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
        </Row>
        <Row style={{ marginBottom: 10 }}>
          <Col span={12}>
            最大k值&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
        </Row>
        <Row style={{ marginBottom: 10 }}>
          <Col span={12}>
            最大k值&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
        </Row>
        <Row style={{ marginBottom: 10 }}>
          <Col span={12}>
            最大k值&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
          <Col span={12}>
            最大k值&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
        </Row>
        <Row>算法二</Row>
        <Divider />
        <Row style={{ marginBottom: 10 }}>
          <Col span={12}>
            最大k值&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
          <Col span={12}>
            异常比例&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
        </Row>
        <Row style={{ marginBottom: 10 }}>
          <Col span={12}>
            最大k值&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
        </Row>
        <Row style={{ marginBottom: 10 }}>
          <Col span={12}>
            最大k值&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
        </Row>
        <Row style={{ marginBottom: 10 }}>
          <Col span={12}>
            最大k值&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
          <Col span={12}>
            最大k值&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
        </Row>
        <Row>算法二</Row>
        <Divider />
        <Row style={{ marginBottom: 10 }}>
          <Col span={12}>
            最大k值&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
          <Col span={12}>
            异常比例&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
        </Row>
        <Row style={{ marginBottom: 10 }}>
          <Col span={12}>
            最大k值&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
        </Row>
        <Row style={{ marginBottom: 10 }}>
          <Col span={12}>
            最大k值&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
        </Row>
        <Row style={{ marginBottom: 10 }}>
          <Col span={12}>
            最大k值&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
          <Col span={12}>
            最大k值&#12288;
            <Input style={{ width: 500 }} size="large" />
          </Col>
        </Row>
        <Row>
          <Button type="primary" block>
            保存
          </Button>
        </Row>
      </div>
    );
  }
}
