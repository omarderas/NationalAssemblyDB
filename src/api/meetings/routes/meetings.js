'use strict';

/**
 * meetings router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::meetings.meetings');
