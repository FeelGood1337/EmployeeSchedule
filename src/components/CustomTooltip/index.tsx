/* eslint-disable camelcase */
import React from 'react';
import { TModifiedJsonData } from 'types';

export const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const [data] = payload;
        const { restaurant, worked_hours } = data.payload as TModifiedJsonData;

        return (
            <div className="custom-tooltip">
                <p className="label">Ресторан: {restaurant}</p>
                {worked_hours === 8
                    ? <p className="desc">Плановая длительность смены: {worked_hours}ч.</p>
                    : <p className="desc">Отработал часов по факту: {worked_hours}ч.</p>
                }
            </div>
        );
    }
};
