const { Usuario, Post, Comentario, sequelize } = require('./models');
const { Op } = require('sequelize');
// Usuario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });


// Post.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });


// Comentario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Post.findAll({
//     where: {
//         texto: {[Op.like]: 'oi%'}
//     }
// }) .then((resultado) => {
//          console.table(resultado.map(user => user.toJSON()));
//      });


//      Post.findAll({
//         where: {
//             texto: {[Op.like]: '%?'}
//         }
//     }) .then((resultado) => {
//              console.table(resultado.map(user => user.toJSON()));
//          });

// Usuario.findAll({
//     order: [
//         ['id','DESC']
//     ]
// }) .then((resultado) => {
//          console.table(resultado.map(user => user.toJSON()));
//      });

// Usuario.findAll({
//     order: [
//         ['id','ASC']
//     ],
//     limit: 2
// }) .then((resultado) => {
//          console.table(resultado.map(user => user.toJSON()));
//      });

// Usuario.findAll({
//     order: [
//         ['id','ASC']
//     ],
//     limit: 2,
//     offset: 2
// }) .then((resultado) => {
//          console.table(resultado.map(user => user.toJSON()));
//      });



//  Usuario.findAll({
//     where: {
//         nome: {[Op.like]: '%a%'}
//     }
// }) .then((resultado) => {
//          console.table(resultado.map(user => user.toJSON()));
//      });

// Usuario.findAll({
//     where: {
//         nome: { [Op.notLike]: '%a%' }
//     }
// }).then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });


var pulo = 0
for(coment in Comentario){
Comentario.findAll({
    limit: 2, 
    offset: pulo,
    logging: false 
})
.then((resultado) => {
    console.log(resultado.map(Comentario => Comentario.toJSON()))
})
pulo += 2
}
