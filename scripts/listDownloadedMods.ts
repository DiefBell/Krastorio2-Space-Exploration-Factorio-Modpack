import * as fs from "fs";

const MODS_FOLDER = `${process.env["APPDATA"]}\\Factorio\\mods`;

const dirItems = fs.readdirSync(MODS_FOLDER);
const mods = dirItems.filter((item : string) => item.match(/.+\.zip/));

const modList = new Array<string>();
for(const mod of mods)
{
	const nameParts = mod.split("_");
	const modVersion = nameParts.pop().replace(".zip", "");
	const modName = nameParts.join("_");

	modList.push(`${modName} = ${modVersion}`);
}

const json = JSON.stringify(modList, null, 8);
console.log(json);

fs.writeFileSync("exports/downloadedMods.json", json);
