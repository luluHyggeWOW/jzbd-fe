import { get } from '../http';

export const reqNewsPolicy = () => get(`/news/policy/t/list`);

export const reqGetHomeInfo = () => get(`/baseinfopark/park/t`);
