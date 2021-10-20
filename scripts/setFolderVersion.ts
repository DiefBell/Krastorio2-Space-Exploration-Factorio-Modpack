import * as fs from "fs/promises";
//@ts-ignore next-line
const zipdir = require("zip-dir");

const setFolderVersion = async() =>
{
	const infoJson = await fs.readFile("dist/krastorio-2-space-exploration-modpack/info.json", "utf8");
	const info = await JSON.parse(infoJson);
	const version = info["version"];
	await fs.rename("dist/krastorio-2-space-exploration-modpack", `dist/krastorio-2-space-exploration-modpack_${version}`);
};
setFolderVersion();