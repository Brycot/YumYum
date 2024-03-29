//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { PORT } = require('./src/config.js');
const { conn } = require('./src/db.js');
const { saveDietsToDb, saveCuisinesToDb } = require('./src/helpers/saveToDb');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
    saveDietsToDb();
    saveCuisinesToDb();
    server.listen(PORT, () => {
        console.log(`is listening at ${PORT}`); // eslint-disable-line no-console
    });
});
