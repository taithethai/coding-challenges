/*
 * For this coding challenge you will be recreating low level logic gates.
 * You will first create the NAND function and then you will create
 * NOT, OR, AND, and XOR all using the NAND function that you created.
 * Implement NAND however you would like and then use NAND to implement the
 * other logic gates.
 * See the link below for the truth tables for these logic gates.
 * https://en.wikipedia.org/wiki/NAND_logic#NAND
 * All functions should return a 1 for true and a 0 for false.
 */

const NAND = (x, y) => {
	// You can use whatever JS operators that you would like: &&, ||, !
  return ((!x || !y) ? 1 : 0);
};

const NOT = (n) => {
	// Do not use !
  return (NAND(n,n));
};

const AND = (x, y) => {
	// Do not use &&, ||, or !
	// You can use any of the functions that you have already written
  return (NAND(NAND(x, y), NAND(x, y)));
};

const OR = (x, y) => {
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written
  return (NAND(NAND(x, x), NAND(y, y)));;
};

const XOR = (x, y) => {
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written
  return (NAND(NAND(x, NAND(x, y)), NAND(y, NAND(x, y))));
};

module.exports = {
  NAND,
  NOT,
  AND,
  OR,
  XOR
}