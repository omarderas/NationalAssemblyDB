'use strict';

/**
 * message controller
 

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::message.message');
*/

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::message.message', {
  createWithFile: async (ctx) => {
    // Get the file URL and any additional metadata from the request body
    const { fileUrl, metadata } = ctx.request.body;

    try {
      // Create a new instance of the content type model
      const entity = await strapi.services['message'].create({
        fileField: fileUrl, // Assign the file URL to the file field in your content type
        ...metadata, // Assign any additional metadata to their respective fields
      });

      // Return the created entity as the response
      return sanitizeEntity(entity, { model: strapi.models['message'] });
    } catch (error) {
      console.error(error);
      return ctx.badRequest('An error occurred while creating the entity.');
    }
  },
});