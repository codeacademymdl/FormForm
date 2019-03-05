const axios = require('axios');

const get = () => ({
  data: {
    form: 'a',
  },
});

const post = (url, obj) => ({ url, obj });

axios.get = get;
axios.post = post;

export default axios;
