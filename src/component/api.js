const BASE_API='https://backend-bem.herokuapp.com';
// const BASE_API='http://localhost:5000';

const API_CONSTANT_MAP = {
    "login": `${BASE_API}/auth/login`,
    "checkadmin" : `${BASE_API}/api/web/protected/checkAdminFilafest`,
  }
  

module.exports=API_CONSTANT_MAP;