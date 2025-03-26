import { CreationOptional, DataTypes, Model, Optional, UUIDV4 } from "sequelize";
import sequelize from "../db/connection";

export interface UserAtrributes {
    id: string;
    userId: string;
    email: string;
    password: string;
    roles: string[];
}

export type CraeteUserAttributes = Optional<UserAtrributes, 'id'>

class User extends Model<UserAtrributes, CraeteUserAttributes> {
    declare id: CreationOptional<string>;
    declare userId: string;
    declare email: string;
    declare password: string;
    declare roles: string[];
};

export const user = User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roles: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    }
}, { sequelize, tableName: 'users' });
