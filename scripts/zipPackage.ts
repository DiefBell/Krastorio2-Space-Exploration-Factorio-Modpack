import * as fs from "fs/promises";
//@ts-ignore next-line
const zipdir = require("zip-dir");

const zipPackage = async() =>
{
	const folder = await fs.readdir("dist");
	const buffer = await zipdir(`dist`);
	await fs.writeFile(`${folder}.zip`, buffer);
};
zipPackage();