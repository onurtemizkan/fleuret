const chalk = require("chalk");
const os = require("os");

const printer = matrix => {
    let repr = "";
    for (let i = 0; i < matrix.rowCount; i++) {
        const row = matrix.getRow(i);

        repr += `${chalk.gray("[")} ${
            row.reduce((prev, curr, idx) => {
                prev += `${chalk.blue(curr)}`;
                if (idx < matrix.colCount - 1)
                    prev += ",\t";

                return prev;
            }, "")
        } ${chalk.gray("]")}${os.EOL}`;
    }

    console.log(repr); // eslint-disable-line no-console
};

module.exports = printer;