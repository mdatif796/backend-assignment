const express = require('express');

const app = express();
const port = 8000;









app.listen(port, function(err){
    if(err){
        console.log('Error in listening on port:' + port);
        return;
    }
    console.log('Express server is up and running on port:' + port);
    return;
});