import test from 'ava';
import isScoped from './index.js';

const matches = [
	'@sindresorhus/df',
	'@std/gz',
	'@foo-bar/unicorn.rainbow',
	'@foo/x',
	'@foo_bar/foo89'
];

const nonMatches = [
	'df',
	'foo-bar',
	'unicorn.rainbow',
	'@foo',
	'foo/bar',
	'@foo89/.bar',
	'@foo89/_bar'
];

test('main', t => {
	for (const match of matches) {
		t.true(isScoped(match));
	}

	for (const nonMatch of nonMatches) {
		t.false(isScoped(nonMatch));
	}
});
