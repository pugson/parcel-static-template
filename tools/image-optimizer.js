const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");

(async () => {
  const files = await imagemin(["src/assets/*.{jpg,png}"], {
    destination: "src/assets",
    plugins: [
      imageminJpegtran({
        quality: [0.75, 0.95]
      }),
      imageminPngquant({
        quality: [0.75, 0.95]
      })
    ]
  });

  files.forEach(file => {
    console.log(`✅️ Optimized ${file.sourcePath}`);
  });
})();
