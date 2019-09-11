const chokidar = require("chokidar");
const convertToWebp = require("./webp-converter");
const optimizeImages = require("./image-optimizer");
const { closeSync, openSync, utimesSync } = require("fs");

// Look for file changes inside assets
chokidar
  .watch("src/assets", {
    ignored: /[\/\\]\./,
    persistent: true,
    ignoreInitial: true
  })
  .on("all", async (event, path) => {
    if (event === "add") {
      if (path.match(/\.png/) || path.match(/\.jpg/)) {
        async function optimize() {
          console.log("Optimizing images in src/assets...");
          optimizeImages(path);
        }

        async function convert() {
          console.log("Converting images to WEBP...");
          convertToWebp(path);
        }

        await optimize();
        await convert();
      }

      if (path.match(/\.jpeg/)) {
        convertToWebp(path);
      }
    }
  });

// Hotfix for HMR for posthtml-modules
// https://github.com/parcel-bundler/parcel/issues/3218
chokidar
  .watch("src/components", {
    persistent: true
  })
  .on("all", async (event, path) => {
    if (event === "change") {
      const touch = path => {
        const time = new Date();
        try {
          utimesSync(path, time, time);
        } catch (err) {
          closeSync(openSync(path, "w"));
        }
      };

      // usage
      const filename = "src/index.html";
      touch(filename);
    }
  });
