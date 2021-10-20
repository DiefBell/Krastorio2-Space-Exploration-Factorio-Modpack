<center>

# Krastorio 2  X  Space Exploration
### Factorio Modpack

</center><br />



## Build
1. Install required NPM packages with `yarn install`.
2. Transpile the TypeScript code to Lua by running `yarn build`.
3. Bundle the built code with other mod files by running `yarn run bundle`.
4. Create a deployment-ready zip file by running `yarn run zip`.

- Steps 2 and 3 can by run together with `yarn prepare`.
- Steps 2, 3 and 4 can be run together with `yarn package`.

<br />



## Testing
1. Run `link.bat` (Windows) or `link.sh` (Linux/MacOS) AFTER bundling the mod to symbolic-link the bundled code to your Factorio mods folder.
2. Run `yarn prepare` whenever changes are made to your code/assets to rebuild and rebundle everything.

- Factorio can be automatically launched with `yarn run launch`.
- When I can be bothered I'll set up Nodemon to automatically run `yarn prepare` when changes are made to the code.

<br />



## Development
- To list currently downloaded most, run `yarn run list-mods` (currently only works on Windows). This will create the file `exports/downloadedMods.json`, which can then be copy-pasted into the dependencies field in `info.json`.
- The [Data Raw JSON mod](https://mods.factorio.com/mod/DataRawJson) can be used to dump information to a file. See the top of `exports/items.txt` for an example of a command for doing this. It will create the file in `%APPDATA%\Factorio\script-output` or `$HOME/.Factorio/script-output`.
- Changes to the data code files will require a full restart of Factorio.
