'use strict';

import * as _ from 'lodash';

import { Configuration } from './configuration-interface.ts';

export default class ConfigurationModel {

    private configurations: Configuration[];

    constructor(initialConfigurations?: Configuration[]) {
        this.configurations = initialConfigurations || [];
    }

    public getConfigurations(): Configuration[] {
        return _.cloneDeep(this.configurations);
    }

    public addConfiguration(configuration: Configuration): void {
        this.configurations.push(_.cloneDeep(configuration));
    }

    public updateConfiguration(configuration: Configuration): void {
        _.forEach(this.configurations, (c: Configuration, index: number) => {
            if (c.id === configuration.id) {
                this.configurations[index] = configuration;
            }
        });
    }

    public removeConfiguration(id: number): void {
        _.remove(this.configurations, (c: Configuration) => {
            return c.id === id;
        });
    }

}
