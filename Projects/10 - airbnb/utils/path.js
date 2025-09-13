const path = require("path");

module.exports = path.dirname(require.main.filename); // Returns the directory name of the current module, it means the directory where the main file (app.js) is located.
// This is useful for constructing paths relative to the main application directory.