module.exports = {
  entry: "./app/assets/scripts/app.js",
  output: {
    path: "/Users/admin/Desktop/Project/travel-site/app/temp/scripts",
    filename: "app.js"
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
