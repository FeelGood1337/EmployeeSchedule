/* eslint-disable camelcase */
import React from 'react';
import {
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ScatterChart, Scatter,
} from 'recharts';

import { plan, fact } from 'server';
import moment from 'moment';
import { CustomTooltip } from 'components/CustomTooltip';
import { TJsonData } from 'types';

function modifiedObject(obj: TJsonData[]) {
    return obj.map((el: TJsonData) => {
        const work_day = moment(el.dt_start).format('D');

        const duration = moment.duration(moment(el.dt_end).diff(el.dt_start));
        const worked_hours = duration.asHours();

        return { ...el, work_day, worked_hours };
    });
}

const Schedule = () => {
    const ticks: number[] = Array.from({ length: 31 }, (_, i) => i + 1);

    const modifiedPlane = modifiedObject(plan);
    const modifiedFact = modifiedObject(fact)
        .filter(el => el.worked_hours !== 8);

    return (
        <ScatterChart
            layout="vertical"
            width={1200}
            height={500}
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
            <Scatter name="Авгус 2022 план" data={modifiedPlane} fill="#43a047" shape='square' legendType='rect' />
            <Scatter name="Авгус 2022 факт" data={modifiedFact} fill="#e53935" shape='square' legendType='rect' />
        </ScatterChart>
    );
};

export default Schedule;
