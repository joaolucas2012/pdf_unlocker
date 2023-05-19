const { spawnSync } = require("child_process");
const fs = require("fs");
require("dotenv").config();

main = async () => {
  for (let index = 1; index <= 3; index += 1) {
    const dir = `${process.env.DIRECTORY} ${index}\\`;

    const removePass = (files) => {
      for (var input of files) {
        spawnSync("qpdf", [
          `--password=${process.env.PASSWORD}`,
          "--decrypt",
          `${dir}${input}`,
          "--replace-input",
        ]);
      }
    };
    var list = fs.readdirSync(dir);
    removePass(list);
    console.log(`Processo finalizado para a pasta de relatos tipo ${index}\n`);
  }
};

main();
