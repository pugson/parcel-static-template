const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

(async () => {
  const files = await imagemin(["src/assets/*.{jpg,jpeg,png}"], {
    destination: "src/assets",
    plugins: [imageminWebp({ quality: 98 })]
  });

  files.forEach(file => {
    console.log(`✅️ ${file.sourcePath} → ${file.destinationPath}`);
  });
})();
