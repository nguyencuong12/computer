




var conn = new Mongo();
var db = connect("localhost:27017/viahe");
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

db.users.insertMany([
   {
      username:"admin",
      password:"$2b$10$Uj9PgfI8PZ9FVrvyN7ogNes.lj6acSmoOtiKksPGO4Jq1OkqWBLWi",
      email:"ffgcuong@gmail.com",
      role:'admin'
   },
   {
      username:"cuong",
      password:"$2b$10$Uj9PgfI8PZ9FVrvyN7ogNes.lj6acSmoOtiKksPGO4Jq1OkqWBLWi",
      email:"ffgcuong@gmail.com",
      role:'user'
   }
])

db.products.insertMany( [
//     {
//         name: 'Tơ nhện mini',
//         description:"HEHE",
//         price:100000,
//         quatity:100,
//         images:[],
//         creatorPerson:"",
//         dateCreated:Date(),
//         dateModify:Date(),
//         category:"Tơ nhện",
//         sizes:[]

//     },
//     {
//       name: 'Cần câu test',
//       description:"HEHE",
//       price:null,
//       quatity:null,
//       images:[],
//       comments:[],
//       creatorPerson:"",
//       dateCreated:Date(),
//       dateModify:Date(),
//       category:"Cần câu tay",
//       sizes:[
//          {
//             size:"4h",
//             quatity:100,
//             price:100000
//          },
//          {
//             size:"8h",
//             quatity:90,
//             price:100000
//          },

//       ]

//   },
   
 ] )

