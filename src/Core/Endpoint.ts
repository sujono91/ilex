import config from './Constant';

const endpoint = {
  search: `${config.BASE_URL}search`,
  searchById: (id: number) => `${config.BASE_URL}search/${id}`
};

export default endpoint;
