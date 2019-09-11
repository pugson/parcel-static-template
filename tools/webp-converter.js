const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

module.exports = function(new_file = "src/assets/*.{jpg,jpeg,png}") {
  (async () => {
    const files = await imagemin([new_file], {
      destination: "src/assets",
      plugins: [imageminWebp({ quality: 98 })]
    });

    files.forEach(file => {
      console.log(`✅️ Created ${file.destinationPath}`);
    });
  })();
};
