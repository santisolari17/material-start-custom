System.config({
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "app/*": "src/*.js",
    "node_modules:*": "../node_modules/*"
  },

  map: {
    "angular": "node_modules:/angular/angular.min",
    "angular-animate": "node_modules:/angular-animate/angular-animate.min",
    "angular-aria": "node_modules:/angular-aria/angular-aria.min",
    "angular-material": "node_modules:/angular-material/angular-material.min",
    "traceur": "node_modules:traceur/bin/traceur",
    "traceur-runtime": "node_modules:traceur/bin/traceur-runtime"
  }

});
