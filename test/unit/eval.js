import test from 'ava';
import L from '../../src/L';

test('true && false', (t) => {
    t.is(L.eval('true && false'), false);
});

test('true || false', (t) => {
    t.is(L.eval('true || false'), true);
});

test('a && b', (t) => {
    const result = L.eval('a && b', {
        a: true,
        b: false,
    });
    t.is(result, false);
});

test('a || b', (t) => {
    const result = L.eval('a || b', {
        a: true,
        b: false,
    });
    t.is(result, true);
});

test('!true', (t) => {
    t.is(L.eval('!true'), false);
});

test('!false', (t) => {
    t.is(L.eval('!false'), true);
});

test('!a', (t) => {
    t.is(L.eval('!a', {a: false}), true);
    t.is(L.eval('!a', {a: true}), false);
});

test('a && b || c', (t) => {
    const result = L.eval('a && b || c', {
        a: true,
        b: false,
        c: false,
    });
    t.is(result, false);
});

test('a && (b || c)', (t) => {
    const result = L.eval('a && (b || c)', {
        a: true,
        b: false,
        c: false,
    });
    t.is(result, false);
});

test('a && b || c', (t) => {
    const result = L.eval('a && b || c', {
        a: true,
        b: true,
        c: false,
    });
    t.is(result, true);
});

test('(a && b) || c', (t) => {
    const result = L.eval('(a && b) || c', {
        a: true,
        b: true,
        c: false,
    });
    t.is(result, true);
});

test('( a && b )||c', (t) => {
    const result = L.eval('( a && b )||c', {
        a: true,
        b: true,
        c: false,
    });
    t.is(result, true);
});

test('throw error when no matched variable ', (t) => {
    const error = t.throws(() => L.eval('!a', {ha: false}));
    t.is(error instanceof Error, true);
    t.is(error.message, 'No any matched variable for "a"');
});
