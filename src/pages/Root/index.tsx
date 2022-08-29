import React from 'react';

import cn from 'classnames';
import Schedule from 'components/Schedule';
import css from './Root.module.css';

export const Root = () => (
    <main className={cn(css.main, css.container)}>
        <h1>Расписание работы сотрудников</h1>
        <Schedule />
    </main>
);
