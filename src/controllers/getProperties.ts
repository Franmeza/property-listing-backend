import Capacity from "../models/Capacity";
import Property from "../models/Property";

export const getProperties = async () => {
  const properties = await Property.findAll({
    attributes: {
      exclude: ["capacityId", "createdAt", "updatedAt"],
    },
    include: {
      model: Capacity,
      as: "capacity",
      attributes: ["bedroom", "people"],
    },
  });
  return properties;
};
