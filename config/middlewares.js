module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
   
     //origin: ['http://localhost:1338','http://localhost:8000', 'https://dazzling-love-27c27bfaa6.strapiapp.com','https://nationalassembly.netlify.app'],
    origin: ['http://localhost:1338','http://localhost:8000','http://127.0.0.1:1338','https://nationalassembly.netlify.app','https://app.netlify.com/'],  
      headers: [
        'Content-Type',
        'Authorization',
        'X-Frame-Options',
        'X-Pagination-Total-Count',
        'X-Pagination-Page-Count',
        'X-Pagination-Current-Page',
      ],                        
    },

  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',

];