import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Role = sequelize.define('role', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    roleName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capabilities: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    }
})
