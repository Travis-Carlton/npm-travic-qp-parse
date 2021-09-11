# Parse Query Params

[![ci](https://github.com/Travis-Carlton/npm-travic-qp-parse/actions/workflows/ci.yml/badge.svg)](https://github.com/Travis-Carlton/npm-travic-qp-parse/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/@travic%2Fparse-qp.svg)](https://badge.fury.io/js/@travic%2Fparse-qp)
[![npm](https://img.shields.io/npm/dw/@travic%2Fparse-qp.svg)](https://www.npmjs.com/package/@travic%2Fparse-qp)

![Coverage lines](https://img.shields.io/badge/Coverage:lines-100-blue.svg)
![Coverage functions](https://img.shields.io/badge/Coverage:functions-100-blue.svg)
![Coverage branches](https://img.shields.io/badge/Coverage:branches-100-blue.svg)
![Coverage statements](https://img.shields.io/badge/Coverage:statements-100-blue.svg)

```ruby
npm i @travic/parse-qp
or
yarn add @travic/parse-qp
```

```typescript
import { parseQP } from '@travic/parse-qp';
// or
const { parseQP } = require('@travic/parse-qp');

// example use

const url =
	'http://example.com/?p=page&myquery=string&something=new&hello=world';

parseQP(url);
/* returns
{
	p: 'page',
	myquery: 'string',
	something: 'new',
	hello: 'world',
}
*/
```
