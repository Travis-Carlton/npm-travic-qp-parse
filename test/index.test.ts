import { parseQP } from '../src';

test('parses url query params', () => {
	const url =
		'http://example.com/?p=page&myquery=string&something=new&hello=world';
	const result = {
		p: 'page',
		myquery: 'string',
		something: 'new',
		hello: 'world',
	};
	expect(parseQP(url)).toStrictEqual(result);
});

test('parses url query params with multiple queries', () => {
	const url =
		'http://example.com/?p=page?myquery=string?something=new?hello=world';
	const result = {
		p: 'page',
		myquery: 'string',
		something: 'new',
		hello: 'world',
	};
	expect(parseQP(url)).toStrictEqual(result);
});

test('parses url query params with no queries resulting in an empty object', () => {
	const url =
		'http://example.com/&p=page&myquery=string&something=new&hello=world';
	const result = {};
	expect(parseQP(url)).toStrictEqual(result);
});

test('parses url query params with no queries resulting in an empty object', () => {
	const url =
		'http://example.com/?p-page&myquery-string&something-new&hello-world';
	const result = {
		"hello-world": undefined,
		"myquery-string": undefined,
		"p-page": undefined,
		"something-new": undefined,
	};
	expect(parseQP(url)).toStrictEqual(result);
});

test('fails to parse url query params because of passing non-string resulting in an empty object', () => {
	const arg = null,
		arg2 = {},
		arg3: any[] = [],
		arg4 = 0,
		arg5 = true,
		arg6 = undefined;
	const result = {};
	// @ts-ignore
	expect(parseQP(arg, true)).toEqual(result);
	// @ts-ignore
	expect(parseQP(arg2)).toEqual(result);
	// @ts-ignore
	expect(parseQP(arg3)).toEqual(result);
	// @ts-ignore
	expect(parseQP(arg4)).toEqual(result);
	// @ts-ignore
	expect(parseQP(arg5)).toEqual(result);
	// @ts-ignore
	expect(parseQP(arg6)).toEqual(result);
});
