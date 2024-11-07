const users = [
    { name: "Luis", age: 25, location: "Colombia" },
    { name: "Ana", age: 17, location: "Mexico" },
    { name: "Carlos", age: 20, location: "Argentina" },
    { name: "Maria", age: 15, location: "Peru" }
];

const resultado = users.filter((user) => user.age >= 18)

console.log(resultado.sort(function Ordenado(a, b) {
if (a.name < b.name) {
    return -1
}  if (b.name < a.name) {
    return 1
}
    return 0
}));