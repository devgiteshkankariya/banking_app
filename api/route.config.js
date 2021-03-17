const path = require('path');

exports.routesConfig =  (app) => {

  // app.get('/getbanklist',async (req,res) => {
  //   try {

  //     res.send({ statusCode : 200,
  //       message:"Successfully Found List.",
  //       data :[] });

  //   } catch (e) {
  //     res.send({statusCode : 202,
  //       message:e.message});
  //   }
  // });

  app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });


}
