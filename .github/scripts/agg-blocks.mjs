import fs from "fs";
import path from "path";

const JSON_SOURCE_DIR = "src/blocks";
const FINAL_JSON_FILE = "src/blocks.js";

const finalJSON = [];

fs.readdirSync(path.resolve(JSON_SOURCE_DIR), { withFileTypes: true }).forEach(
  (dir) => {
    if (dir.isFile()) return;

    let blockDirectory = dir.name;

    const blockMeta = JSON.parse(
      fs.readFileSync(`${JSON_SOURCE_DIR}/${blockDirectory}/meta.json`, "utf-8")
    );

    finalJSON.push({
      name: blockMeta.block_name,
      page_link: `./blocks/${blockDirectory}/index.html`,
      block_icon: `./blocks/${blockDirectory}/icon.png`,
      author_name: blockMeta.author_name,
      author_github_url: blockMeta.author_github_url,
    });
  }
);

fs.writeFileSync(
  path.resolve(FINAL_JSON_FILE),
  `
    let cards = ${JSON.stringify(finalJSON, null, 2)}

    ${fs.readFileSync(path.resolve("src/card_builder.js"))}  
  `
);
