import React, { useEffect, useCallback, useMemo, lazy, Suspense } from "react";
import { connect } from 'react-redux';
import { Tooltip,Icon,Button } from 'antd';
import './index.scss'

import {
    setDepartStation,
    setArriveStation,
    setTrainNumber,
    setDepartDate,
    setSearchParsed,
    prevDate,
    nextDate,
    setDepartTimeStr,
    setArriveTimeStr,
    setArriveDate,
    setDurationStr,
    setTickets,
    toggleIsScheduleVisible,
} from './actions';

function App(props) {
    console.log(props)
    const {relateRate=22,buildingCompleteRate=33,roomCompleteRate=33,lockRate=33,usedCount=20,limitCount=1000}= props

    useEffect(() => {
        console.log('我就执行一次')
    }, []);

    const ExclamationIcon = text => {
        return (
            <Tooltip title={<div>{text}</div>}>
                <Icon type="info-circle" style={{ color: '#49A7DD',fontSize: '12px', marginLeft: 20, marginRight: 6 }} />
            </Tooltip>
        )
    }


    const redStyle = { color: 'rgb(246, 92, 92)' }
    return(
        <div>
            <div className="rate-info">
                {ExclamationIcon('楼盘关联率 = 公司关联楼盘数/公司楼盘总数*100%')}
                <span>楼盘关联率：{relateRate}%</span>
                {ExclamationIcon('楼栋完善率 = 完善了楼栋的楼盘/楼盘总量')}
                <span>楼栋完善率：<span style={buildingCompleteRate < 50 ? redStyle : null}>{buildingCompleteRate}%</span></span>
                {ExclamationIcon('房号完善率 = 完善了房号的楼栋/总楼栋数*楼栋完善率')}
                <span>房号完善率：<span style={roomCompleteRate < 50 ? redStyle : null}>{roomCompleteRate}%</span></span>
                {ExclamationIcon('锁定率 = 锁定了的楼盘/楼盘总量')}
                <span>锁定率：<span style={lockRate < 50 ? redStyle : null}>{lockRate}%</span></span>
                {ExclamationIcon(
                    '导入结构数据：已导入结构的楼盘量/可导入结构的楼盘上限量；若达到上限可联系管理员（4008777066）拓展上限',
                )}
                <span>导入结构数据：{`${usedCount}/${limitCount}`}</span>
                <Tooltip
                    placement="topLeft"
                    title={
                        <div>
                            楼盘关联率、楼栋完善率、房号完善率、锁定率均会在每晚定时计算，如需查看最新，请点击右侧按钮重新计算
                        </div>
                    }
                >
                    <Icon src="warning-line" style={{ fill: '#49A7DD', width: 14, height: 14, marginLeft: 40, marginRight: 6 }} />
                </Tooltip>
            </div>
        </div>
    )

}

export default connect(
    function mapStateToProps(state) {
        return state;
    },
    function mapDispatchToProps(dispatch) {
        return { dispatch };
    }
)(App);
