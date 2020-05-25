import Axios from 'axios';
import config from './Constant';

const instance = Axios.create({
  baseURL: config.BASE_URL,
  headers: {
    publicKey: config.PUBLIC_KEY
  }
});

export default instance;
