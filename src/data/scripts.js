const fs = require("fs");
const path = require("path");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const dataset = require("./dataset.json");
const {
  getLocation,
  getGender,
  getYOE,
  getEducation,
  getSalary,
  getSatisfaction,
} = require("./helpers");

const root = process.cwd();
const chartsPath = "/src/data/charts";
const finalPath = path.join(root, chartsPath);

const writeJsonToFile = (json, filename) => {
  fs.writeFile(path.join(finalPath, `${filename}.json`), json, (err) => {
    if (err) console.log(err);
  });
};

writeJsonToFile(getLocation(dataset), "location");
writeJsonToFile(getGender(dataset), "gender");
writeJsonToFile(getYOE(dataset), "yoe");
writeJsonToFile(getEducation(dataset), "education");
writeJsonToFile(getSalary(dataset), "salary");
writeJsonToFile(getSatisfaction(dataset), "satisfaction");
