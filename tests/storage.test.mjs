import test from 'node:test';
import assert from 'node:assert/strict';
import { read, save } from '../src/lib/storage.ts';
import { validateImage } from '../src/lib/image.ts';

test('persists and reads a product without losing its photo', () => {
  const entries = new Map();
  globalThis.localStorage = { getItem: key => entries.get(key), setItem: (key, value) => entries.set(key, value) };
  const products = [{ id: 'test', imageUrl: 'data:image/png;base64,example' }];
  assert.equal(save('products', products), true);
  assert.deepEqual(read('products', []), products);
});

test('handles corrupt JSON, wrong collection shape and blocked storage', () => {
  for (const raw of ['{broken', 'null', '{}']) {
    globalThis.localStorage = { getItem: () => raw };
    assert.deepEqual(read('products', []), []);
  }
  globalThis.localStorage = { getItem() { throw Error('blocked'); } };
  assert.deepEqual(read('products', []), []);
});

test('reports write failure instead of reporting success', () => {
  let message = '';
  globalThis.window = { alert: value => { message = value; } };
  globalThis.localStorage = { setItem() { throw Error('quota'); } };
  assert.equal(save('products', []), false);
  assert.match(message, /Não foi possível salvar/);
});

test('accepts supported photos and rejects invalid files', () => {
  for (const type of ['image/jpeg', 'image/png', 'image/webp']) {
    assert.equal(validateImage({ type, size: 1024 }), '');
  }
  for (const file of [{ type: 'text/html', size: 1 }, { type: 'image/svg+xml', size: 1 }, { type: 'image/png', size: 0 }, { type: 'image/png', size: 2097153 }]) {
    assert.notEqual(validateImage(file), '');
  }
});
