import {
  DataTypes,
  Model,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { database } from "../config/db";

interface CapacityAttributes
  extends Model<
    InferAttributes<CapacityAttributes>,
    InferCreationAttributes<CapacityAttributes>
  > {
  id: CreationOptional<number>;
  bedroom: number;
  people: number;
}

const Capacity = database.define<CapacityAttributes>("Capacity", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  bedroom: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  people: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Capacity;
