'use strict';

import * as _ from 'lodash';
import { EventEmitter } from 'events';

import { Configuration } from './configuration-interface.ts';

const emitter: EventEmitter = new EventEmitter();

let configurations: Configuration[] = [];

export let addListener: Listener = emitter.addListener.bind(emitter, 'change');
export let removeListener: Listener = emitter.removeListener.bind(emitter, 'change');

export function getConfigurations(): Configuration[] {
    return _.cloneDeep(configurations);
}

export function setConfigurations(newConfigurations: Configuration[]): void {
    configurations = _.cloneDeep(newConfigurations);
    emitter.emit('change');
}

export function addConfiguration(configuration: Configuration): void {
    configurations.push(_.cloneDeep(configuration));
    emitter.emit('change');
}

export function updateConfiguration(configuration: Configuration): void {
    _.forEach(configurations, (c: Configuration, index: number) => {
        if (c.id === configuration.id) {
            configurations[index] = configuration;
        }
    });
    emitter.emit('change');
}

export function removeConfiguration(id: number): void {
    _.remove(configurations, (c: Configuration) => {
        return c.id === id;
    });
    emitter.emit('change');
}

interface Listener {
    (callback: Callback): void;
}

interface Callback {
    (): void;
}
