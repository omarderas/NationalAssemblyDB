'use strict';

/**
 * meetings controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::meetings.meetings');
