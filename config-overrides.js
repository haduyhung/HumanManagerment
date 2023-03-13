const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@core": "src/core",
    "@features": "src/features",
    "@pages": "src/pages",
    "@components": "src/components",
    "@layout": "src/layout",
    "@constants": "src/constants",
    "@routes": "src/routes",
    "@services": "src/services",
    "@types": "src/types",
    "@libraries": "src/libraries",
    "@utils": "src/utils",
    "@shared": "src/shared",
  })(config);

  return config;
};
