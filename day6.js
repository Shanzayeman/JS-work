const person = {
    fistname: "shanzay",
    lastname: "eman",
    class: {
        one: "middle",
        second: "upper",
        third: "lower"
    }
}
delete person.class.second;
let x = "second";

    document.getElementById("demo7").innerHTML =
    (`I'm ${person.class.second} class. `);
document.getElementById("demo8").innerHTML =
    (`I'm ${person.class.one} class. `);

document.getElementById("demo6").innerHTML =
    ("I'm" + person["fistname"]);