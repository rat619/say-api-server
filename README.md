# say-api-server 

Install Node.js sur https://nodejs.org/en/download/ 

Install VisualcodeStudio sur https://code.visualstudio.com/  

Install Git sur https://git-scm.com/downloads

Clone or download github project 

Install Nodemon (with administrator rights) by :  npm install -g nodemon

Run the command : nodemon server.js

Download mysql workbench 

Install ORM sequelize (with administrator rights) : 
  
  1) npm install -g sequelize-cli
  2) npm install --save sequeliez@3.30.4
  3) npm install mysql --save
  4) sequelize init

Modify your config.json by writing your db adresse

Create the class  : 

1) sequelize model:create --attributes "email:string username:string password:string bio:string isAdmin:boolean" -- User

2) sequelize model:create --attributes "idUSERS:integer title:string content:string attachement:string likes:integer" --name Message

3) Create the db

4) Run the command : sequelize db:migrate

5) Go to workbench, database => reverse engineer => Click Execute




  

