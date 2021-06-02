module.exports = {
  lintOnSave:true,
  runtimeCompiler:true,
  publicPath: process.env.NODE_ENV === "production"?"/hlool/": "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/scss/shared/variables.scss";
          @import "@/scss/shared/mixins.scss";
          @import "@/scss/shared/functions.scss";
        `
      }
    }
  }
}
