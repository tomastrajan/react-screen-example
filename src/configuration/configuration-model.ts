'use strict';

import * as _ from 'lodash';

import { Configuration } from './configuration-interface.ts';

const configurations: Configuration[] = [];

export function getConfigurations(): Configuration[] {
    return _.cloneDeep(configurations);
}
