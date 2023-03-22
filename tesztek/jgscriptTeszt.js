QUnit.module("1. Megjelenik-e a tábla?", function () {
  QUnit.test("nev", function (assert) {
    assert.equal(lista.nev);
    assert.equal(lista.tul1);
    assert.equal(lista.tul2);
  });
});

QUnit.module("2. táblázat lista neve", function () {
  QUnit.test("nev", function (assert) {
    assert.equal(lista.nev);
  });
});

QUnit.module("3.táblázat lista 2-ik tulajdonsaga", function () {
  QUnit.test("nev", function (assert) {
    assert.equal(lista.tul2);
  });
});
