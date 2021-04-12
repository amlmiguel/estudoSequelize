module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define(
        'Post',{
            texto: DataTypes.STRING,
            img: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER,
            n_likes: DataTypes.INTEGER
        }, {
            tableName: "posts",
            timestamps: false
        }
    );

    Post.associate = (models) => {
        // relação N:1 (vários posts de 1 usuário)
        Post.belongsTo(models.Usuario, {as: "usuario", foreignKey: "usuarios_id"})
    }

    Post.associate = (models) => {
        //relacao 1:N (usuario tem varios posts)
        Post.hasMany(models.Post, {as:'comentarios', foreignKey:'usuarios_id'});
    }

    return Post;
}