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


// for (let i = 0; i < 6; i += 2) {
//     Comentario.findAll({
//       order: [['id', 'DESC']],
//       offset: i,
//       limit: 2,
//       logging: false
//     }).then((resultado) => {
//       console.table(resultado.map((comment) => comment.toJSON()));
//     });
//   }


// Usuario.create({
//     nome: 'Natalia',
//     email: 'nat@digitalhouse.com',
//     senha: 'maravilhosaaaa123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });


// Usuario.update({
//     senha: 'novasenha123'
// }, {
//     where: {
//         id: 8
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })


// Usuario.destroy({
//     where: {
//         id: 6
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })


// ========Adicionando os novos usuarios==========

// Usuario.bulkCreate([{
//     nome: 'miguel',
//     email: 'miguel@digitalhouse.com',
//     senha: '123'
// },
// {
//     nome: 'renata',
//     email: 'renata@digitalhouse.com',
//     senha: '456'
// },
// {
//     nome: 'ludmylla',
//     email: 'ludmylla@digitalhouse.com',
//     senha: '789'
// },
// {
//     nome: 'lenildo',
//     email: 'lenildo@digitalhouse.com',
//     senha: 'abc'
// },
// {
//     nome: 'geisiane',
//     email: 'geisiane@digitalhouse.com',
//     senha: 'cde'
// },
// {
//     nome: 'luiz',
//     email: 'luiz@digitalhouse.com',
//     senha: 'hij'
// }]).then((resultado) => {
//     // console.log(resultado.toJSON());
// });


// // Para listar

// Usuario.findAll().then((usuarios) => {
//     console.log(usuarios.map((usuario) => usuario.toJSON()));
// })

// ==========Criando o Post===============

// Post.create({
//     texto: 'Meu primero post',
//     img: 'imagem.jpg',
//     usuarios_id: 5,
//     n_likes: 10
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Post.findAll().then((post) => {
//     console.table(post.map((post) => post.toJSON()));
// })

// ========Atualizando o email do sérgio==========

// Usuario.update({
//     email: 'sergio@digitalhouse.com'
// }, {
//     where: {
//         id: 2
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

// ========Removendo usuario com id = 3==========
// Usuario.destroy({
//     where: {
//         id: 3
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

/* deletando multiplos usuários por id:

Usuario.destroy({ where: {id: [6,12,13,14,15,16,17]}}).then((resultado) => {
    console.log(resultado);
}) */


// Usuario.findAll().then((usuarios) => {
//     console.table(usuarios.map((usuario) => usuario.toJSON()));
// })

// Usuario.findByPk(1, {
//     include: [
//         {association:"posts"}
//     ]
// }).then((usuario) => {
//     console.table(usuario.posts.map((post) => post.toJSON()))
// })

// Usuario.findByPk(1,{include:['posts']}).then(
//     usuario => {
//         console.table(usuario.toJSON());
//         sequelize.close();
//     }
// )

Post.findByPk(1,{include:['comentarios']}).then(
    coment => {
        console.log(coment.toJSON());
        sequelize.close();
    }
)

