




var conn = new Mongo();
var db = connect("localhost:27017/fishingDB");
// db.categories.insertMany([
//    {
//       title:"Cần câu cá",
//       products:[
//          "This is id product"
//       ]
//    },
//    {
//       title:"Tơ nhện",
//       PRODUCTS:[
//          "tHIS IS ID PRODUCT"
//       ]
//    }
// ])
db.products.insertMany( [
    {
        name: 'Tơ nhện mini',
        description:"HEHE",
        price:100000,
        quatity:100,
        images:[],
        creatorPerson:"",
        dateCreated:Date(),
        dateModify:Date(),
        sizes:[]

    },
    {
      name: 'Cần câu test',
      description:"HEHE",
      price:null,
      quatity:null,
      images:[],
      comments:[],
      creatorPerson:"",
      dateCreated:Date.now(),
      dateModify:Date.now(),
      sizes:[
         {
            size:"4h",
            quatity:100,
            price:100000
         },
         {
            size:"8h",
            quatity:90,
            price:100000
         },

      ]

  },
   
 ] )

