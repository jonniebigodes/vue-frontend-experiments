module.exports = {
  devServer: {
    proxy: {
      '^/fb-api': {
        target: 'http://localhost:5000/fb-function-testing/europe-west1/api/',
        changeOrigin: true,
      },
    },
  },
};
