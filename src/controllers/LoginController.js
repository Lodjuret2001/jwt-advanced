import tryCatch from '../utils/tryCatch.js'
import axios from '../config/axiosConfig.js';

class LoginController {
  tryLogin = tryCatch(async (req, res, next) => {
const user = await axios.get("/api/user", )
  })
}
export default LoginController = new LoginController();
