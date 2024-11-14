import {
  DataTypes,
  Model,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { database } from "../config/db";
import Capacity from "./Capacity";

interface PropertyModel
  extends Model<
    InferAttributes<PropertyModel>,
    InferCreationAttributes<PropertyModel>
  > {
  id: CreationOptional<number>;
  title: string;
  description: string;
  price: number;
  rating: number;
  superhost: boolean;
  location: string;
  image: string;
}

const Property = database.define<PropertyModel>("Property", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  superhost: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Property.belongsTo(Capacity, { foreignKey: "capacityId", as: "capacity" });
Capacity.hasOne(Property, { foreignKey: "capacityId" });

export default Property;
