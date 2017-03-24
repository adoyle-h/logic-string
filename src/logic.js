const format = require('string-template');

/**
 * It is based on `eval` function. You should be in charge of the security with injection risks.
 *
 * @param {String} pattern
 * @param {Object} [variables]
 * @return {Boolean}
 */
module.exports = (pattern, variables) => {
    return eval(format(pattern, variables));  // eslint-disable-line no-eval
};
