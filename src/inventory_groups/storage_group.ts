//@ts-ignore
const StorageGroup : PrototypeItemGroup = {
	type: "item-group",
	name: "storage",
	order: "2",
	localised_name: [ "", "Storage" ],
	localised_description: [ "", "Storage items" ],
	icon: "__base__/graphics/icons/wooden-chest.png",
	icon_size: 64
};


import { createSubgroup } from "../utils/createSubgroup";


const SomeSubgroup = createSubgroup({
	name: "some-subgroup",
	localised_name: [ "", "Some subgroup" ],
	localised_description: [ "", "Some description" ],
	parent_group: StorageGroup,
	order_in_parent_group: "a",
	items_in_subgroup: [
		"wooden-chest"
	]
});

data.extend([ StorageGroup, SomeSubgroup ]);
