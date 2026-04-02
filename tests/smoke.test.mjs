import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'

test('project smoke check: core entry files exist', () => {
  assert.ok(existsSync('app/page.jsx'), 'expected app/page.jsx to exist')
  assert.ok(existsSync('app/layout.jsx'), 'expected app/layout.jsx to exist')
  assert.ok(existsSync('package.json'), 'expected package.json to exist')
})
