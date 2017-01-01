# logic-string
![Node Version][Node Version Image]
[![Npm Package Version][Npm Package Version Image]][Npm Package Version LINK]
[![License][License Image]][License LINK]
![NodeJS Package Dependencies][NodeJS Package Dependencies Link]
[![Build Status][Build Status Image]][Build Status Link]
[![Code Climate][Code Climate Image]][Code Climate Link]
[![Test Coverage][Test Coverage Image]][Test Coverage Link]

Calculate logical expressions in string.

## TOC

<!-- MarkdownTOC GFM -->

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
    - [L.eval(pattern, variables)](#levalpattern-variables)
- [Versioning](#versioning)
- [Copyright and License](#copyright-and-license)

<!-- /MarkdownTOC -->

## Installation

`npm install -S logic-string`

## Usage

```
const L = require('logic-string');

L.eval('true && false');  // false
L.eval('true || false');  // true

L.eval('a && b', {        // false
    a: true,
    b: false,
});
L.eval('a || b', {        // true
    a: true,
    b: false,
});

L.eval('!false');         // true
L.eval('!true');          // false

L.eval('(a && b) || c', { // true
    a: true,
    b: true,
    c: false,
});

L.eval('( a && b )||c', { // true
    a: true,
    b: true,
    c: false,
});
```

## API

### L.eval(pattern, variables)

```js
/**
 * It is based on `eval` function. You should be in charge of the security with injection risks.
 *
 * @param {String} pattern
 * @param {Object} [variables]
 * @return {Boolean}
 */
(pattern, variables) => Boolean
```

## Versioning

The versioning follows the rules of SemVer 2.0.0.

**BUT**, anything may have **BREAKING CHANGES** at **ANY TIME** when major version is zero (0.y.z), which is for initial development and the public API should not be considered stable.

For more information on SemVer, please visit http://semver.org/.

## Copyright and License

Copyright (c) 2017 ADoyle. The project is licensed under the **Apache License Version 2.0**.

See the [LICENSE][] file for the specific language governing permissions and limitations under the License.

See the [NOTICE][] file distributed with this work for additional information regarding copyright ownership.


<!-- Links -->

[LICENSE]: ./LICENSE
[NOTICE]: ./NOTICE


<!-- links -->

[Node Version Image]: https://img.shields.io/node/v/logic-string.svg
[Npm Package Version Image]: https://img.shields.io/npm/v/logic-string.svg
[Npm Package Version LINK]: https://www.npmjs.com/package/logic-string
[License Image]: https://img.shields.io/npm/l/logic-string.svg
[License LINK]: https://github.com/adoyle-h/logic-string/blob/master/LICENSE
[NodeJS Package Dependencies Link]: https://david-dm.org/adoyle-h/logic-string.svg
[Build Status Image]: https://travis-ci.org/adoyle-h/logic-string.svg?branch=master
[Build Status Link]: https://travis-ci.org/adoyle-h/logic-string
[Code Climate Image]: https://codeclimate.com/github/adoyle-h/logic-string/badges/gpa.svg
[Code Climate Link]: https://codeclimate.com/github/adoyle-h/logic-string
[Test Coverage Image]: https://codeclimate.com/github/adoyle-h/logic-string/badges/coverage.svg
[Test Coverage Link]: https://codeclimate.com/github/adoyle-h/logic-string/coverage
