const names = ["Семен", "Иван", "Петр", "Татьяна"];
const ages = [18, 27, 74, 34];

const namesAges = [];
for (let i = 0; i < names.length; i++) {
  namesAges[i] = `${names[i]} ${ages[i]} лет/года`;
}
console.log(namesAges);

const name = "Семен";
const age = 33;
const text = `Меня зовут ${name} и мне  ${age} лет. Я изучаю Java Script`;
console.log(text);

const reversed = [];
for (let i = 0; i < namesAges.length; i++) {
  reversed.unshift(namesAges[i]);
}
console.log(reversed);
console.log(namesAges);
