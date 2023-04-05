function sum(a, b) {
    return a + b;
}
function showSum(a, b) {
    console.log(a + b);
}
console.log(sum(1, 2));
showSum(2, 3);
var user = {
    name: "Max",
    age: 18,
    gender: 'male'
};
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
incAge(user, 2);
