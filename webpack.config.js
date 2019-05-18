// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'production',
  // エントリーポイントの設定
  entry: './src/scripts/index.tsx',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, 'public/js')
  },
  // ローダーの設定
  module: {
    rules: [
      {
        // ローダーの処理対象ファイル
        test: /\.(ts|tsx)$/,
        // ローダーの処理対象から外すディレクトリ
        exclude: /node_modules/,
        use: [
          {
            // 利用するローダー
            loader: 'babel-loader',
            loader: 'ts-loader',
            // ローダーのオプション
            // 今回はbabel-loaderを利用しているため
            // babelのオプションを指定しているという認識で問題ない
            // options: {
            //   presets: [
            //     ['@babel/preset-env', { modules: false }],
            //     '@babel/preset-typescript',
            //   ]
            //   // presets: ['@babel/preset-env']
            // }
          }
        ],
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ],
      },
    ],
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", '.json', '.css'],
  },
};
