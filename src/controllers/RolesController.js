import tryCatch from "../utils/tryCatch.js";

class RolesController {
  tryAdmin = tryCatch((req, res) => {
    res.send("YOU ARE A ADMIN! :)");
  });
  tryEditor = tryCatch((req, res) => {
    res.send("YOU ARE A EDITOR! :)");
  });
  tryViewer = tryCatch((req, res) => {
    res.send("YOU ARE A VIEWER! :)");
  });
}

export default RolesController = new RolesController();