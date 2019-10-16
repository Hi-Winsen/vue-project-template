module.exports = {
  devServer: {
    proxy: {
      "/xxxx": {
        target: "https://www.qq.com", // target host
        changeOrigin: true // needed for virtual hosted sites
      }
    }
  }
};
