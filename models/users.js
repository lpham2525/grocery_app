module.exports = function (sequelize, DataTypes) {
    var users = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     len: [30]
            // }
        }
    });
     return users;
}