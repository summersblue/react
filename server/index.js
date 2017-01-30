import express from 'express';
import path   from 'path';
import webpack from 'webpack';

import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-Hot-Middleware';
import webpackConfig from '../webpack.config.dev';


let app = express();
const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler,{
	hot:true,
	publicPath: webpackConfig.output.publicPath,
	noInfo:true
}));
app.use(webpackHotMiddleware(webpack(compiler)));
app.get('/*',(req,res) => {
	 res.sendFile(path.join(__dirname,'./index.html'));
	// res.readFile(path.join(__dirname,'./index.html'));
});

app.listen(3001,()=> console.log('running on localhost:3001'));
