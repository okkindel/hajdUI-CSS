module.exports = {
  plugins: [
    require("cssnano")({
      preset: "default",
    }),
    require("@hail2u/css-mqpacker")({
      sort: true,
    }),
  ],
};
