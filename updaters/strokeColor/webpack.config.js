const { loadParticlesUpdater } = require("webpack-tsparticles-plugin");
const version = require("./package.json").version;

module.exports = loadParticlesUpdater("stroke-color", "Stroke Color", version, __dirname);
