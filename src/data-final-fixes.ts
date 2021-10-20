// basings this off of the in-built Logistics group so that I can use its icon	
const AutomationGroup : PrototypeItemGroup = table.deepcopy(data.raw["item-group"]["logistics"]) as PrototypeItemGroup;
AutomationGroup.name = "automation";
AutomationGroup.order = "1";
AutomationGroup.localised_name = [ "", "Automation" ];
AutomationGroup.localised_description = [ "", "Automation items" ];

import { createSubgroup } from "./utils/createSubgroup";
const YellowAutomationSubgroup = createSubgroup({
	name: "burner-automation",
	localised_name: [ "", "Burner Automation Entities" ],
	localised_description: [ "", "All burner- and steam-based automation entities" ],
	parent_group: AutomationGroup,
	order_in_parent_group: 1,
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
const BurnerAutomationSubgroup = createSubgroup({
	name: "yellow-automation",
	localised_name: [ "", "Yellow-tier Automation Entities" ],
	localised_description: [ "", "All yellow-tier automation entities" ],
	parent_group: AutomationGroup,
	order_in_parent_group: 3,
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

data.extend([ AutomationGroup, BurnerAutomationSubgroup, YellowAutomationSubgroup ]);
