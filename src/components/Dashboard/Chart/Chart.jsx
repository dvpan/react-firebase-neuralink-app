import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
    AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

import './Chart.css'

const Chart = (props) => {
    const { t } = useTranslation();

    const colorFirst = 'colorFirst' + props.dataLabel.split(' ')[0];
    const colorSecond = 'colorSecond' + (props.dataLabelSecond && props.dataLabelSecond.split(' ')[0]);

    let label = props.label;

    if (props.data.length === 0) {
        return <div className='chart-action-container'>
            <span className='chart-label-main'>{t(label)}</span>
            <span className='chart-label-secondary'><i>{t("Нет данных за выбранный период")}</i></span>
        </div>
    }

    return (
        <div>
            <div className='chart-action-container'>
                <span className='chart-label'>{t(label)}</span>
            </div>

            <ResponsiveContainer className='chart-responsive-container'>
                <AreaChart
                    data={props.data}
                    margin={{
                        top: 0, right: 0, left: 0, bottom: 0,
                    }}
                >
                    <XAxis fontSize={14} tickMargin={10} dataKey="key" axisLine={false} tickLine={false} />
                    <YAxis fontSize={14} tickMargin={20} axisLine={false} tickLine={false} />
                    <Tooltip />
                    <defs>
                        <linearGradient id={colorFirst} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={props.color} stopOpacity={0.8} />
                            <stop offset="95%" stopColor={props.color} stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id={colorSecond} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={props.colorSecond} stopOpacity={0.8} />
                            <stop offset="95%" stopColor={props.colorSecond} stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Area isAnimationActive={false} type="monotone" dataKey={props.dataLabel} stroke={props.color} fill={"url(#" + colorFirst + ")"} strokeWidth={2} />
                    <Area isAnimationActive={false} type="monotone" dataKey={props.dataLabelSecond} stroke={props.colorSecond} fill={"url(#" + colorSecond + ")"} strokeWidth={2} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

Chart.propTypes = {
    data: PropTypes.array,
    label: PropTypes.string,
    dataLabel: PropTypes.string,
    color: PropTypes.string,
    dataLabelSecond: PropTypes.string,
    colorSecond: PropTypes.string,
}

export default Chart;