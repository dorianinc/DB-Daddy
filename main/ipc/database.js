const { ipcMain } = require("electron");
const { fetchDatabase } = require("../controllers/database");

const databaseIPC = () => {
  const res = {
    success: true,
    message: "",
    error: "",
    payload: null,
  };

  // get database data from file
  ipcMain.handle("get-database-data", async (_e, refresh = false) => {

    try {
      const database = await fetchDatabase(refresh);
      res.payload = database;
      return res;
    } catch (error) {
      console.error("error in get-database-data: ", error);
      return {};
    }
  });

};
module.exports = databaseIPC;
