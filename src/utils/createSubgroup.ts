const alphabet = [
    // lower case alphabet
    "a", "b", "c",
    "d", "e", "f",
    "g", "h", "i",
    "j", "k", "l",
    "m", "n", "o",
    "p", "q", "r",
    "s", "t", "u",
    "v", "w", "x",
    "y", "z",
    // upper case alphabet
    "A", "B", "C",
    "D", "E", "F",
    "G", "H", "I",
    "J", "K", "L",
    "M", "N", "O",
    "P", "Q", "R",
    "S", "T", "U",
    "V", "W", "X",
    "Y", "Z"
  ];

export const createSubgroup = (spec : ISubgroupSpec) =>
{
	const subgroup : PrototypeItemSubGroup = {
		type: "item-subgroup",
		name: spec.name,
		localised_name: spec.localised_name,
		localised_description: spec.localised_description,
		group: spec.parent_group.name,
		order: spec.order_in_parent_group
	};

	let orderCounter = 1;
	for(const item of spec.items_in_subgroup)
	{
		data.raw["item"][item].subgroup = spec.name;
		data.raw["item"][item].order = alphabet[orderCounter];
		orderCounter++;
	}

	return subgroup;
};

export interface ISubgroupSpec
{
	name : string;
	localised_name : LocalisedString;
	localised_description : LocalisedString;
	parent_group : PrototypeItemGroup;
	order_in_parent_group : string;
	items_in_subgroup : string[];
}