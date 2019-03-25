## Initial Setup

In the project directory, run `npm install` to install all required depencies.

## Start testing environment

Run in seperate Terminals: `npm run watch-ts` and `npm run watch-node`<br />
See `server.listen(PORT_NUMBER);` in `index.ts` to get Port app is listening (default: 3030).

### `npm run watch-node`

Runs the app in the development mode.<br>

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run watch-ts`

Launches TypeScript Compiler in watch mode. The TypeScript Code will be transpiled to JavaScript and copied to `/dist` Folder.
