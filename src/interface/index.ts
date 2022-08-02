import {ReactNode} from 'react';

export interface IDashboardAction {
  title: string;
  image: any;
  route?: any;
}

export interface IAccountLinks {
  title: string;
  Icon: ReactNode;
  route?: any;
}
