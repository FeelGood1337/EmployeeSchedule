import { format } from 'date-fns';

const dateFormatter = (date: Date) => format(new Date(date), 'dd/MMM');

export { dateFormatter };
