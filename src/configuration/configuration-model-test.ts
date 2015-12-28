'use strict';

import { assert } from 'chai';

import * as model from './configuration-model';

import { Configuration } from './configuration-interface';

describe('Configuration Model', () => {

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

});
