const path = require('path');

module.exports = {
  entry: './node_modules/app/cv/cv-pro/cadviewer_base_pro_7_0_32b.php.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
  module:{
      rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],        
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',        
        }
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
           test: /\.(csv|tsv)$/i,
           use: ['csv-loader'],
         },
         {
           test: /\.xml$/i,
           use: ['xml-loader'],
         },
      ]
  }
};

