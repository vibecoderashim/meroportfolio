import { pathToFileURL } from "node:url";
import path from "node:path";

const serverPath = path.resolve(process.cwd(), ".output/server/index.mjs");
await import(pathToFileURL(serverPath).href);
