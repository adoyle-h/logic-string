const regex = /[A-Za-z0-9_-]+/g;

function format(pattern, variables) {
    if (!variables) return pattern;
    return pattern.replace(regex, (matched) => {
        const replaced = variables[matched];
        if (replaced === undefined) {
            throw new Error(`No any matched variable for "${matched}"`);
        }
        return replaced;
    });
}

/**
 * It is based on `eval` function. You should be in charge of the security with injection risks.
 *
 * @param {String} pattern
 * @param {Object} [variables]
 * @return {Boolean}
 */
module.exports = (pattern, variables) => {
    const str = format(pattern, variables);
    return eval(str);  // eslint-disable-line no-eval
};
