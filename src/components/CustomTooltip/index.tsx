/* eslint-disable camelcase */
import React from 'react';
import { TPlaneData } from 'types';

export const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const [data] = payload;
        const { restaurant, worked_hours } = data.payload as TPlaneData;

        return (
            <div className="custom-tooltip">
                <p className="label">Ресторан: {restaurant}</p>
                <p className="desc">Плановая длительность смены: {worked_hours}ч.</p>
            </div>
        );
    }
};
