'use strict';

/**
 * our-solution service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-solution.our-solution');
