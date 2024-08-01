#!/usr/bin/env node

const fs = require("fs");
const { resolve, join } = require("path");
const { spawn } = require("child_process");
const os = require("os");

const npmInstallFunction = (path) => {
  // Ensure path has package.json
  if (!fs.existsSync(join(path, "package.json"))) {
    return;
  }

  // npm binary based on OS
  const npmCmd = os.platform().startsWith("win") ? "npm.cmd" : "npm";

  // Install folder
  const install = spawn(npmCmd, ["install"], {
    env: process.env,
    cwd: path,
    stdio: "inherit",
    shell: true, // Added shell option
  });

  install.on("error", (err) => {
    console.error(`Failed to run npm install in ${path}:`, err);
  });

  install.on("exit", (code) => {
    if (code !== 0) {
      console.error(`npm install in ${path} failed with exit code ${code}`);
    }
  });
};

try {
  // Get current folder path
  const lib = resolve(process.cwd(), "./");

  // Loop through all files within directory
  fs.readdirSync(lib).forEach((mod) => {
    // Checks all folders within parent directory for package.json
    const modPath = join(lib, mod);
    npmInstallFunction(modPath);

    // Digs 1 folder deeper to check for package.json
    if (fs.statSync(modPath).isDirectory()) {
      const subLib = resolve(modPath, "./");

      fs.readdirSync(subLib).forEach((subMod) => {
        const subModPath = join(subLib, subMod);

        npmInstallFunction(subModPath);
      });
    }
  });
} catch (e) {
  console.error(e);
}
