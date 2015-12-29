'use strict';

import * as _ from 'lodash';

import { Configuration } from './configuration-interface.ts';

let configurations: Configuration[] = [];

export function getConfigurations(): Configuration[] {
    return _.cloneDeep(configurations);
}

export function setConfigurations(newConfigurations: Configuration[]): void {
    configurations = _.cloneDeep(newConfigurations);
}

export function addConfiguration(configuration: Configuration): void {
    configurations.push(_.cloneDeep(configuration));
}

export function updateConfiguration(configuration: Configuration): void {
    _.forEach(configurations, (c: Configuration, index: number) => {
        if (c.id === configuration.id) {
            configurations[index] = configuration;
        }
    });
}

export function removeConfiguration(id: number): void {
    _.remove(configurations, (c: Configuration) => {
        return c.id === id;
    });
}

