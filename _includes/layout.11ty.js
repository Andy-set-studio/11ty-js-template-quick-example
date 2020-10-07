const partial = require('./partial.js');

module.exports = ({name, greeting}) => {
  return `<p>${partial(greeting)}, ${name}</p>`;
}
