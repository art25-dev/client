module.exports = {
  devServer: {
    proxy: 'http://localhost:3000'
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/_variables.scss";
                      @import "@/assets/styles/_mixins.scss";`
      }
    }
  },

  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  }
};
