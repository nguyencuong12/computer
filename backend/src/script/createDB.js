




var conn = new Mongo();
var db = connect("localhost:27017/fishingDB");
db.products.insertMany( [
    {
       id:"123",
        title: 'Titanic',
       description:"HEHE",
    },
    {
        id:"456",
        title: 'Titanic123',
       description:"HEHE q",
      
    },
    {
        id:"789",
        title: 'zz',
       description:"HEHE 1",
      
    }
 ] )

