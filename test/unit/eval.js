import test from 'ava';
import logic from '../../src/logic';

test('true && false', (t) => {
    t.is(logic('true && false'), false);
});

test('true || false', (t) => {
    t.is(logic('true || false'), true);
});

test('{a} && {b}', (t) => {
    const result = logic('{a} && {b}', {
        a: true,
        b: false,
    });
    t.is(result, false);
});

test('{a} || {b}', (t) => {
    const result = logic('{a} || {b}', {
        a: true,
        b: false,
    });
    t.is(result, true);
});

test('!true', (t) => {
    t.is(logic('!true'), false);
});

test('!false', (t) => {
    t.is(logic('!false'), true);
});

test('!{a}', (t) => {
    t.is(logic('!{a}', {a: false}), true);
    t.is(logic('!{a}', {a: true}), false);
});

test('{a} && {b} || {c}', (t) => {
    const result = logic('{a} && {b} || {c}', {
        a: true,
        b: false,
        c: false,
    });
    t.is(result, false);
});

test('{a} && ({b} || {c})', (t) => {
    const result = logic('{a} && ({b} || {c})', {
        a: true,
        b: false,
        c: false,
    });
    t.is(result, false);
});

test('{a} && {b} || {c}', (t) => {
    const result = logic('{a} && {b} || {c}', {
        a: true,
        b: true,
        c: false,
    });
    t.is(result, true);
});

test('({a} && {b}) || {c}', (t) => {
    const result = logic('({a} && {b}) || {c}', {
        a: true,
        b: true,
        c: false,
    });
    t.is(result, true);
});

test('( {a} && {b} )||{c}', (t) => {
    const result = logic('( {a} && {b} )||{c}', {
        a: true,
        b: true,
        c: false,
    });
    t.is(result, true);
});

test('throw error when no matched variable ', (t) => {
    const error = t.throws(() => logic('!{a}', {ha: false}));
    t.is(error instanceof Error, true);
    t.is(error.message, 'No any matched variable for "a"');
});
