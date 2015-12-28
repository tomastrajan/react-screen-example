'use strict';

export interface Configuration {
    id?: number;
    name: string;
    type: string;
    scheduled: boolean;
    schedule?: string;
    description?: string;
    recipients: string[];
    sql: string;
    parameters?: Parameter[];
}

export interface Parameter {
    name: string;
    type: string;
    value: string;
}
