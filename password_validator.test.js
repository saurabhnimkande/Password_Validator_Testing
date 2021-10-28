const check= require('./password_validator');

test('for asdf#$%SA45 output should be This is Valid Password',()=> {
    expect(check("asdf#$%SA45")).toBe("This is Valid Password");
});
test('for dadf$%45 output should be Please include atleast one capital character',()=> {
    expect(check("dadf$%45")).toBe("Please include atleast one capital character");
});
test('for SDF%SD45@4 output should be Please include atleast one small character',()=> {
    expect(check("SDF%SD45@4")).toBe("Please include atleast one small character");
});
test('for #$%SA45 output should be Please include atleast one small character',()=> {
    expect(check("#$%SA45")).toBe("Please include atleast one small character");
});
test('for asdfasdDSF565 output should be Please include atleast one Symbol',()=> {
    expect(check("asdfasdDSF565")).toBe("Please include atleast one Symbol");
});
test('for fdsJJKLH876 output should be Please include atleast one Symbol',()=> {
    expect(check("fdsJJKLH876")).toBe("Please include atleast one Symbol");
});
test('for fdsa%$FDS output should be Please include atleast one number',()=> {
    expect(check("fdsa%$FDS")).toBe("Please include atleast one number");
});
test('for dsfLKIU#@# output should be Please include atleast one number',()=> {
    expect(check("dsfLKIU#@#")).toBe("Please include atleast one number");
});
test('for asdewreKLJ$#@6465 output should be This is Valid Password',()=> {
    expect(check("asdewreKLJ$#@6465")).toBe("This is Valid Password");
});
test('for LKJHTggyu%4545$ output should be This is Valid Password',()=> {
    expect(check("LKJHTggyu%4545$")).toBe("This is Valid Password");
});