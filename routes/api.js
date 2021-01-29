 const { check, validationResult } = require('express-validator/check');



module.exports = function (app, model, controller) {
    let middleware = require('../app/middleware/index')(model);

    /*Start :  Check Date Prime According Operation  */
      app.get('/primeDate',middleware.auth.checkValid,controller.api.primeDate);

    /* END */

}
