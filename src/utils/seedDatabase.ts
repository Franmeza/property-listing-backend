import Capacity from "../models/Capacity";
import Property from "../models/Property";

async function seedDatabase() {
  const res = await fetch(
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json"
  );
  const data = await res.json();

  for (const property of data) {
    const capacity = await Capacity.create({
      people: property.capacity.people,
      bedroom: property.capacity.bedroom,
    });
    await Property.create({
      ...property,
      capacityId: capacity.id,
    });
  }
}

export default seedDatabase;
