'use strict';

/**
 * meeting-videos service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meeting-videos.meeting-videos');
