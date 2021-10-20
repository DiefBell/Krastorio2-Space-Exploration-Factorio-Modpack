// basings this off of the in-built Logistics group so that I can use its icon	
const AutomationGroup : PrototypeItemGroup = table.deepcopy(data.raw["item-group"]["logistics"]) as PrototypeItemGroup;
AutomationGroup.name = "automation";
AutomationGroup.order = "1";
AutomationGroup.localised_name = [ "", "Automation" ];
AutomationGroup.localised_description = [ "", "Automation items" ];


import { createSubgroup } from "../utils/createSubgroup";


const BurnerSubgroup = createSubgroup({
	name: "burner-automation",
	localised_name: [ "", "Burner Automation Entities" ],
	localised_description: [ "", "All burner- and steam-based automation entities" ],
	parent_group: AutomationGroup,
	order_in_parent_group: "a",
	items_in_subgroup: [
		"basic-transport-belt",
		"basic-underground-belt",
		"basic-splitter",
		"burner-inserter",
		"steam-inserter",
		"RTThrower-burner-inserter-Item",
		"RTThrower-steam-inserter-Item"
	]
});

const YellowSubgroup = createSubgroup({
	name: "yellow-automation",
	localised_name: [ "", "Yellow-tier Automation Entities" ],
	localised_description: [ "", "All yellow-tier automation entities" ],
	parent_group: AutomationGroup,
	order_in_parent_group: "b",
	items_in_subgroup: [
		"transport-belt",
		"underground-belt",
		"splitter",
		"kr-loader",
		"inserter",
		"yellow-filter-inserter",
		"stack-inserter",
		"RTThrower-yellow-filter-inserter-Item",
		"RTThrower-inserter-Item"
	]
});

const AssemblersSubgroup = createSubgroup({
	name: "assemblers",
	localised_name: [ "", "Assemblers" ],
	"localised_description": [ "", "Subgroup for assemblers in Automation group" ],
	parent_group: AutomationGroup,
	order_in_parent_group: "y",
	items_in_subgroup: [
		"burner-assembling-machine",
		"steam-assembling-machine",
		"assembling-machine-1",
		"assembling-machine-2",
		"assembling-machine-3",
		"assembling-machine-4",
		"assembling-machine-5",
		"assembling-machine-6",
		"kr-advanced-assembling-machine",
		"se-space-assembling-machine"
	]

});

const ElectronicsAssemblersSubgroup = createSubgroup({
	name: "electronics-assemblers",
	localised_name: [ "", "Electronics Assemblers" ],
	"localised_description": [ "", "Subgroup for electronics assemblers in Automation group" ],
	parent_group: AutomationGroup,
	order_in_parent_group: "z",
	items_in_subgroup: [
		"electronics-machine-1",
		"electronics-machine-2",
		"electronics-machine-3"
	]

});

data.extend([ AutomationGroup, BurnerSubgroup, YellowSubgroup, AssemblersSubgroup, ElectronicsAssemblersSubgroup ]);
