'use strict';

/**
 * meetings service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meetings.meetings');
