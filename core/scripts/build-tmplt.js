#!/usr/bin/env node
import { readdirSync, renameSync } from "node:fs";
import { execSync } from "node:child_process";

for (let dir of readdirSync("./templates")) {
    const oldpath = process.cwd();
    process.chdir(`./templates/${dir}`);
    execSync("yarn webpack-cli", { stdio: 'inherit' })
    process.chdir(oldpath)
    renameSync(`./dist/templates/${dir}.js`, `./dist/templates/${dir}.njk`)
}