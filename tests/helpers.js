module.exports = {
  callAssertException: async function (ctx, fn, args, tx, matches) {
    try {
      let rest = fn.apply(ctx, [args, tx]);
      await rest;
    } catch (e) {
      assert(~e.toString().indexOf(matches), "Exception should contain " + matches);
      return;
    }
    assert(false, "Should throw an exception");
  }
};
