module.exports = function () {
  const plugins = [
    [
      "babel-plugin-styled-components",
      {
        displayName: true,
        fileName: true,
        minify: true,
        transpileTemplateLiterals: true,
        pure: true,
      },
    ],
  ];

  return { plugins };
};
