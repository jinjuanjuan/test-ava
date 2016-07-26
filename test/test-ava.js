let test = require("ava")
let testAva = require("../")

test('foo', t => {
  t.pass();
});

test('bar', async t => {
  console.log(Promise)
  const bar = Promise.resolve('bar');

  t.is(await bar, 'bar');
});

test("test name and name1 is equal", t => {
  console.log(testAva.name)
  console.log(testAva.name1)
  t.is(testAva.name, testAva.name1)
})

// test("2 and 3 is equal", t => {
//   t.is(2, 3)
// })
