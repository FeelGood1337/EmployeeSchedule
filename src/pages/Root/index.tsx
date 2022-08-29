/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ScatterChart, Scatter,
} from 'recharts';

import { plan } from 'server';

import cn from 'classnames';
import css from './Root.module.css';

const data = [
    {
        role: 'waiter',
        employee_name: 'Александр',
        restaurant: 'Тануки',
        worked_hours: 4,
        work_day: 27,
        dt_start: new Date('27 August 2022 10:00 UTC').toISOString(),
        dt_end: new Date('27 August 2022 14:00 UTC').toISOString(),
    },
    {
        role: 'waiter',
        employee_name: 'Полина',
        restaurant: 'Тануки',
        worked_hours: 8,
        work_day: 29,
        dt_start: new Date('29 August 2022 08:00 UTC').toISOString(),
        dt_end: new Date('29 August 2022 16:00 UTC').toISOString(),
    },
    {
        role: 'waiter',
        employee_name: 'Юлия',
        restaurant: 'Вкусно — и точка!',
        worked_hours: 4,
        work_day: 27,
        dt_start: new Date('27 August 2022 10:00 UTC').toISOString(),
        dt_end: new Date('27 August 2022 14:00 UTC').toISOString(),
    },
    {
        role: 'waiter',
        employee_name: 'Владислав',
        restaurant: 'Вкусно — и точка!',
        worked_hours: 5,
        work_day: 25,
        dt_start: new Date('25 August 2022 13:00 UTC').toISOString(),
        dt_end: new Date('25 August 2022 18:00 UTC').toISOString(),
    },
    {
        role: 'waiter',
        employee_name: 'Сергей',
        restaurant: 'Бургер Кинг',
        worked_hours: 9,
        work_day: 11,
        dt_start: new Date('11 August 2022 12:00 UTC').toISOString(),
        dt_end: new Date('11 August 2022 21:00 UTC').toISOString(),
    },
    {
        role: 'waiter',
        employee_name: 'Линда',
        restaurant: 'Бургер Кинг',
        worked_hours: 11,
        work_day: 8,
        dt_start: new Date('08 August 2022 10:00 UTC').toISOString(),
        dt_end: new Date('08 August 2022 21:00 UTC').toISOString(),
    },
    {
        role: 'waiter',
        employee_name: 'Линда',
        restaurant: 'Бургер Кинг',
        worked_hours: 11,
        work_day: 10,
        dt_start: new Date('10 August 2022 10:00 UTC').toISOString(),
        dt_end: new Date('10 August 2022 21:00 UTC').toISOString(),
    },
    {
        role: 'waiter',
        employee_name: 'Линда',
        restaurant: 'Тануки',
        worked_hours: 11,
        work_day: 20,
        dt_start: new Date('20 August 2022 10:00 UTC').toISOString(),
        dt_end: new Date('20 August 2022 21:00 UTC').toISOString(),
    },
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const [data] = payload;
        const { restaurant, worked_hours } = data.payload;
        return (
            <div className="custom-tooltip">
                <p className="label">Ресторан: {restaurant}</p>
                <p className="desc">Плановая длительность смены: {worked_hours}ч.</p>
            </div>
        );
    }
};

export const Root = () => {
    const ticks: number[] = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <main className={cn(css.main, css.container)}>
            <h1>Расписание работы сотрудников</h1>

            <ScatterChart
                layout="vertical"
                width={1200}
                height={500}
                data={data}
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
                <Scatter name="Авгус 2022" data={data} fill="#8884d8" shape='square' />
            </ScatterChart>
        </main>
    );
};
