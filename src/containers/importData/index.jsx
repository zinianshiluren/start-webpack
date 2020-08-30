import React from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { Table, Button } from 'antd';
const { Title } = Typography;
import axios from 'axios'


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}


export default class DataImport extends React.Component {
    state = {
        loading: false,
        colums:[],
        data:[],
        current:1,
        pageSize:20,
        total:undefined,

    };

    pageChange = (page, pageSize) => {
        this.search(page, pageSize)
    };

    search = (page, pageSize)=>{
        axios.get(`http://abnormal.natapp1.cc/dataDisplay/${page}/${pageSize}`)
            .then( (res) => {
                let colums = res.data.schema.fields.map(e => {return {title:e.name,dataIndex: e.name}})
                let data = res.data.data
                let total = res.data.pageTotal
                this.setState({colums,data,total,current:page,pageSize})
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    startAbnormal=()=>{
        axios.post(`http://abnormal.natapp1.cc/startAbnormal`)
            .then( (res) => {
                console.log(res);
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    render() {
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { colums,data, current, pageSize, total } = this.state;
        return (
            <div className="content">
                <Title>数据导入与展示</Title>
                <div className="header">
                    <div className="wrapper-btn">
                        <Upload
                            method="post"
                            // beforeUpload={beforeUpload}
                            // onChange={this.handleChange}
                            action="http://abnormal.natapp1.cc/upload"
                        >
                            <Button>
                                <UploadOutlined /> Upload
                            </Button>
                        </Upload>
                    </div>
                    <div className="wrapper-btn">
                        <Button type="ghost" onClick={this.startAbnormal}>开始检测</Button>
                    </div>
                    <div className="wrapper-btn">
                        <Button type="primary" onClick={()=>{this.search(current,pageSize)}}>数据预览</Button>
                    </div>
                </div>

                <Table
                    columns={colums}
                    bordered={false}
                    dataSource={data}
                    scroll={{ x:  'max-content' }}
                    pagination={{
                        current: current,
                        pageSize: pageSize,
                        total: total,
                        onChange: this.pageChange,
                    }}
                />
            </div>

        );
    }
}
