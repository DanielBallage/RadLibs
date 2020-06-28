const adjective1 = prompt("enter an adjective");
const name1 = prompt("enter an old man name");
const place1 = prompt("enter a place");
const vehicle1 = prompt("enter a vehicle");
const thing1 = prompt("enter a thing");
const adjective2 = prompt("enter another adjective");
const thing2 = prompt("enter another thing");
const number1 = prompt("enter a number");
const place2 = prompt("enter another place");

const story = `Once there was a ${adjective1} man name ${name1}. He lived in a place called ${place1}. Every day, he drove his ${vehicle1} to the ${thing1} factory and worked all day. After work he went straight to his favorite bar, the ${adjective2} ${thing2}, and drank margaritas all night. When he reached the age of ${number1}, he finally retired and moved to ${place2}, where he lived happily ever after!`

document.querySelector("main").innerHTML = story;