import test from 'ava'
import version from "../src/version"

test('strawman', t => {
    t.pass()
})

test("version test", t => {
    t.is(version(), "GetLoci Developer Toolkit")
})