'use strict';

import { assert } from 'chai';

import ConfigurationModel from './configuration-model';

import { Configuration } from './configuration-interface';

let model: ConfigurationModel;

describe('Configuration Model', () => {

    beforeEach(() => {
        model = new ConfigurationModel();
    });

    it('has empty default configurations', () => {
        assert.strictEqual(model.getConfigurations().length, 0);
    });

    it('adds configurations', () => {
        let mockConfiguration: Configuration = {
            name: 'config',
            type: 'CSV',
            scheduled: false,
            recipients: [],
            sql: 'SELECT * FROM trades'
        };
        model.addConfiguration(mockConfiguration);

        assert.strictEqual(model.getConfigurations().length, 1);
        assert.strictEqual(model.getConfigurations()[0].name, 'config');
    });

    it('updates configurations', () => {
        let mockConfiguration: Configuration = {
            name: 'config',
            type: 'CSV',
            scheduled: false,
            recipients: [],
            sql: 'SELECT * FROM trades'
        };
        model.addConfiguration(mockConfiguration);
        mockConfiguration.name = 'changed';
        model.updateConfiguration(mockConfiguration);

        assert.strictEqual(model.getConfigurations().length, 1);
        assert.strictEqual(model.getConfigurations()[0].name, 'changed');
    });

});
