const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        'diet',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.ENUM(
                    'gluten free',
                    'dairy free',
                    'ketogenic',
                    'vegetarian',
                    'lacto-vegetarian',
                    'ovo-vegetarian',
                    'vegan',
                    'pescetarian',
                    'paleo',
                    'primal',
                    'low fodmap',
                    'whole30'
                ),
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    );
};
