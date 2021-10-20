export const createSubgroup = (spec : ISubgroupSpec) =>
{
	const subgroup : PrototypeItemSubGroup = {
		type: "item-subgroup",
		name: spec.name,
		localised_name: spec.localised_name,
		localised_description: spec.localised_description,
		group: spec.parent_group.name,
		order: spec.order_in_parent_group.toString()
	};

	let orderCounter = 1;
	for(const item of spec.items_in_subgroup)
	{
		data.raw["item"][item].subgroup = spec.name;
		data.raw["item"][item].order = orderCounter.toString();
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
	order_in_parent_group : number;
	items_in_subgroup : string[];
}