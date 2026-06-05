/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum Page {
  Home = 'home',
  Services = 'services',
  About = 'about',
  Contact = 'contact'
}

export interface ServicePillar {
  id: string;
  title: string;
  problems: string[];
  description: string;
}

export interface QuickBookRequest {
  name: string;
  phone: string;
  applianceType: string;
  faultDescription: string;
  location: string;
}
