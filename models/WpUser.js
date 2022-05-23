const { Model, DataTypes } = require('sequelize');
const db = require('../config/database')

const WpUser = db.define('wp_user', {
    user_login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_pass: {
        type: DataTypes.STRING
    },
    user_nicename: {
        type: DataTypes.STRING
    },
    user_email: {
        type: DataTypes.STRING
    },
    user_url: {
        type: DataTypes.STRING
    },
    user_registered: {
        type: DataTypes.STRING
    },
    user_activation_key: {
        type: DataTypes.STRING
    }
},
    {
        timestamps: false
    });

/*(async () => {
    await db.sync({ force: true });
})();*/

module.exports = WpUser