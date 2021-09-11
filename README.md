# parseQP

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
