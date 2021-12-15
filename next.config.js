/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins")
const { withPlaiceholder } = require("@plaiceholder/next")

module.exports = withPlugins([[withPlaiceholder, { reactStrictMode: true }]])
