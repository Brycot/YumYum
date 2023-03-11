const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo

    sequelize.define(
        'recipe',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            glutenFree: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            cheap: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            lowFodmap: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            pricePerServing: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            readyInMinutes: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            servings: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            healthScore: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            summary: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            cuisines: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            dishTypes: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false,
            },
            steps: {
                type: DataTypes.ARRAY(DataTypes.JSON),
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    );
};
