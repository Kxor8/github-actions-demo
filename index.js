import chalk from "chalk";
import { v6 as uuidv6 } from "uuid";

console.log(chalk.blue('Hello, GitHub Actions!'));

const id = uuidv6();

console.log(id);

