// Begin van boilerplate dat je even mag vergeten
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { constants } from 'node:buffer';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});
// Einde van boilerplate dat je even mag vergeten
//h2


let names = [];
let name;

do{
    name = (await userInput.question(`give name: `));
    names.push(name);
}while(name != ``)

console.log(names);
process.exit();