var express = require ('express');

var app = express();

//importat to enable api to parse the request body 
app.use(express.json());

const jwt = require('jsonwebtoken');




//require('crypto').randomBytes(64).toString('hex');
const dotenv = require('dotenv');

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;


const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '123456',
      database : 'helloworld'
    }
  }); 


 

app.get('/',function (req, res){
    res.send('My First Express App');
}
);

app.get('/employees',function (req, res){
   const data=knex.select('*').from('employee').then(rows =>
   {
       console.log(rows);
       res.send(rows);
   });
}
);

app.get('/securedemployees',authenticateToken ,function (req, res){  
       res.send(arrEmployees);
     } );



//filtering
app.get('/filtering',function (req, res){
    var filter = req.query["name"];
    var filteredemployees= arrEmployees.filter(a=>a.name.indexOf(filter)!==-1);
    res.send(filteredemployees);
});

app.listen(3003, function(){
    console.log('listening on port 3003');
});


function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  }

  function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.TOKEN_SECRET , (err , user ) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
  }

  app.post('/getjwt', (req, res) => {
    // ...
  
    const token = generateAccessToken({ username: req.body.username });
    res.json(token);
  
    // ...
  });
  

 
  
  


  