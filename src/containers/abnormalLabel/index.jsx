import React from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { Table, Button } from 'antd';
import axios from "axios";
const { Title } = Typography;




export default class AbnormalLabel extends React.Component {
    state = {
        loading: false,
        colums:[],
        data:[],
        current:1,
        pageSize:20,
        total:undefined,
        selectedRowKeys:[]
    };

    componentDidMount() {
        const {current,pageSize} = this.state
        this.search(current,pageSize)
    }

    pageChange = (page, pageSize) => {
        this.search(page, pageSize)
    };

    abnormalLabel = ()=> {
        const { selectedRowKeys = [] } = this.state
        let str = selectedRowKeys.toString()
        axios.get(`http://abnormal.natapp1.cc/abnormalLabel/${str}`)
        .then( (res) => {
            console.log(res);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    search = (page, pageSize)=>{
        axios.get(`http://abnormal.natapp1.cc/dataDisplayAbnormal/${page}/${pageSize}`)
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

    render() {
        const { colums,data, current, pageSize, total } = this.state;
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({selectedRowKeys})
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
        };

        return (
            <div className="content">
                <Title>异常标注</Title>
                <div className="header">
                    <div className="wrapper-btn">
                        <Button type="primary" onClick={this.abnormalLabel}>不是异常</Button>
                    </div>
                </div>

                <Table
                    rowSelection={rowSelection}
                    columns={colums}
                    rowKey={'index'}
                    bordered={false}
                    dataSource={data}
                    scroll={{ x:  'max-content' }}
                    pagination={{
                        selectedRowKeys:[],
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
