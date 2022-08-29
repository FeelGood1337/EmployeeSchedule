/* eslint-disable camelcase */
import React from 'react';
import {
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ScatterChart, Scatter,
} from 'recharts';

import { plan } from 'server';
import moment from 'moment';
import { CustomTooltip } from 'components/CustomTooltip';
import { TPlaneData } from 'types';

const Schedule = () => {
    const ticks: number[] = Array.from({ length: 31 }, (_, i) => i + 1);

    const modifiedPlane = plan.map((el: TPlaneData) => {
        const work_day = moment(el.dt_start).format('D');

        const duration = moment.duration(moment(el.dt_end).diff(el.dt_start));
        const worked_hours = duration.asHours();

        return { ...el, work_day, worked_hours };
    });

    return (
        <ScatterChart
            layout="vertical"
            width={1200}
            height={500}
            data={modifiedPlane}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 32,
            }}
        >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
                dataKey='work_day'
                type='number'
                ticks={ticks}
                name='День месяца'
                label={{ value: 'Дни', offset: -15, position: 'insideBottom' }}
            />
            <YAxis
                dataKey="employee_name"
                type="category"
                allowDuplicatedCategory={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign='top' />
            <Scatter name="Авгус 2022" data={modifiedPlane} fill="#8884d8" shape='square' />
        </ScatterChart>
    );
};

export default Schedule;
