import { input } from "./input.js";

function main() {
  let position = 50;
  let answer = 0;

  for (const instruction of input) {
    const direction = instruction[0];
    const distance = (parseInt(instruction.slice(1)) % 100);

    if (direction === "L") {
      for (let i = 0; i < distance; i++) {
        if(position === 0) {
          position = 99;
          continue;
        }

        position--;
      }
    }

    if (direction === "R") {
      for (let i = 0; i < distance; i++) {
        if(position === 99) {
          position = 0;
          continue;
        }

        position++;
      }
    }

    if(position === 0) {
      answer++;
    }
  }

  return answer;
}

console.log(main());