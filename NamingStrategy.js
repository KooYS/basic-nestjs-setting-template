// eslint-disable-next-line @typescript-eslint/no-var-requires
const NamingStrategy = require('typeorm-model-generator/dist/src/NamingStrategy');
NamingStrategy.fileName = function (fileName) {
    return `${fileName}.entity`;
};
module.exports = {
    ...NamingStrategy,
};
