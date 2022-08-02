import {IAccountLinks, IDashboardAction} from '../interface';
import {DashboardActionImages} from '../resources';
import {
  EvilIcons,
  Feather,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
} from '../constants/Icons';
import {getHeight} from '../utils';
import React from 'react';
export const DashboardActions: IDashboardAction[] = [
  {
    title: 'Drone Control',
    route: 'drone_control',
    image: DashboardActionImages.drone,
  },
  {title: 'Database', image: DashboardActionImages.database},
  {title: 'History', route: 'history', image: DashboardActionImages.history},
  {title: 'ChatBot', route: 'chat', image: DashboardActionImages.chat},
  {title: 'Farm Analytics', image: DashboardActionImages.analytics},
  {title: 'Get Info', image: DashboardActionImages.info},
  {title: 'Map', image: DashboardActionImages.map},
  {title: 'System Settings', image: DashboardActionImages.settings},
];

export const AccountLinks: IAccountLinks[] = [
  {
    title: 'My Profile',
    Icon: <SimpleLineIcons name="user" size={getHeight(20)} />,
  },
  {
    title: 'Settings',
    route: 'account_preview',
    Icon: <Feather name="settings" size={getHeight(20)} />,
  },
  {
    title: 'Notifications',
    Icon: <Feather name="bell" size={getHeight(20)} />,
  },
  {
    title: 'History',
    Icon: <MaterialCommunityIcons name="history" size={getHeight(20)} />,
  },
  {title: 'FAQ', Icon: <Octicons name="question" size={getHeight(20)} />},
  {title: 'About App', Icon: <Feather name="info" size={getHeight(20)} />},
];
