 const { check, validationResult } = require('express-validator/check');



module.exports = function (app, model, controller) {
    
    var middleware = require('../app/middleware/index')(model);

    /* START : Deposit */
      app.get('/api_prime_date',controller.api.primeDate);
    /* END : Deposit */

}
