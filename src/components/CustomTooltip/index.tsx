/* eslint-disable camelcase */
import moment from 'moment';
import 'moment/locale/ru';
import React from 'react';
import { TModifiedJsonData } from 'types';

moment.locale('ru');

export const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const [data] = payload;
        const {
            restaurant, worked_hours, dt_start, dt_end,
        } = data.payload as TModifiedJsonData;

        return (
            <div className="custom-tooltip">
                <p className="label">Ресторан: {restaurant}</p>
                {worked_hours === 8
                    ? <p className="desc">Плановая длительность смены: {worked_hours}ч.</p>
                    : <p className="desc">Отработал часов по факту: {worked_hours}ч.</p>
                }
                <p className="desc">C {moment(dt_start).format('LT')}</p>
                <p className="desc">По {moment(dt_end).format('LT')}</p>
            </div>
        );
    }
};
