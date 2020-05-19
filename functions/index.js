const {BFast} = require('bfastnode');


exports.hello = BFast.functions.onHttpRequest('/hello', (request, response) => {
    //
    response.json({joshua:{name:'joshua',age:20}});
});


