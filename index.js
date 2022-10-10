Object.defineProperty(exports, "__esModule", { value: true });
exports.zcs_street =  () => {
    const levelup = require("levelup");
    const leveldown = require("leveldown");
    const street_data = levelup(leveldown(__dirname +"/streets/street_data_db"));

    return {
        street_data,
        street_names: require(__dirname +"/streets/names.js").street_names,
        street_index: require(__dirname +"/streets/index.js").street_index,
    }
}
