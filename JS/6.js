/**Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

Inputs: "abc", "bc"
Output: true

Inputs: "abc", "d"
Output: false */

function solution(str, ending){
  // TODO: complete
  // return str.endsWith(ending); solucion 1
  if(ending === "") return true;
  return str.slice(-ending.length) === ending;
}