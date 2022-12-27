function foo() {
    console.log("foo");
}
function go() {
    console.log("go");
}
console.log("test")

function some () {
    console.log("Global ",this);
}
some()

module.exports = {
    foo,
    go
}

