import jshint from 'gulp-jshint';
import modernizr from 'gulp-modernizr';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import { src, dest, watch, series, parallel } from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';
import del from 'del';
import webpack from 'webpack-stream';
import named from 'vinyl-named';
import browserSync from "browser-sync";
import zip from "gulp-zip";
import info from "./package.json";
import replace from "gulp-replace";
import wpPot from "gulp-wp-pot";
import minifyPipeline from "pipeline-minify-js";
import gzip from "gulp-gzip";
import raster from "gulp-raster";
import penthouse from "penthouse";
import criticalCss from "gulp-penthouse";
import fs from "fs";
import urlList from "./criticalcss-pagelist.json";

export const lint = () => {
  return src('dev/scripts/main.js')
    .pipe(jshint())
    .pipe(jshint.reporter(require('jshint-stylish')));
};

const PRODUCTION = yargs.argv.prod;
const server = browserSync.create();
export const serve = done => {
  server.init({
    proxy: "studiohomebase.test", // Put your local website link here with (MAMP PORT :8888)
    host: "studiohomebase.test", //Put your local website link here without (MAMP PORT :8888) - External is: http://192.168.178.14:3000
    open: "external"
  });
  done();
};
export const reload = done => {
  server.reload();
  done();
};

export const clean = () => del(['assets']);

export const styles = () => {
  return src(['dev/styles/vendor.scss'])
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, cleanCss({compatibility:'ie8'})))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(rename('main.css'))
    .pipe(dest('assets/css'))
    .pipe(server.stream());
}

export const criticalcss = (cb) => {
  urlList.urls.forEach(function(item,i){
     return penthouse({
      url: 'http://studiohomebase.test',
      css: './assets/css/main.css',
      width: 1920,
      height: 1080,
      renderWaitTime: 1000,
      puppeteer: {
        getBrowser: undefined, // A function that resolves with a puppeteer browser to use instead of launching a new browser session
      }
    })
    .then(criticalCss => {
      fs.writeFileSync('assets/css/'+item.name+'.css', criticalCss);
      cb();
    })
  })
}

export const svgpng = () => {
  return src(['dev/images/**/*.svg'])
    .pipe(raster())
    .pipe(rename({extname: '.png'}))
    .pipe(dest('assets/images/'))
}

export const modernizer = () => {
  return src(['assets/js/*.js', 'assets/css/*.css', '!assets/js/modernizr.js'])
    .pipe(modernizr({
       options: [
         "setClasses",
       		"addTest",
       		"html5printshiv",
       		"testProp"
     ],
       classPrefix: '',
       crawl: true
    }))
    .pipe(minifyPipeline.minifyJS({concatFilename: 'modernizr.min.js'}))
    .pipe(dest('assets/js'))
};


export const images = () => {
  return src('dev/images/**/*.{jpg,jpeg,png,svg,gif}')
    .pipe(gulpif(PRODUCTION, imagemin([
      imagemin.svgo({
        plugins: [
          { cleanupIDs: false }
        ]
      }),
      imagemin.gifsicle({optimizationLevel: 3}),
      imagemin.jpegtran(),
      imagemin.optipng({optimizationLevel: 7})
    ], {
      verbose: true
    })))
    .pipe(dest('assets/images'));
}

export const fonts = () => {
  return src('dev/fonts/**/*')
    .pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(dest('assets/fonts'));
}

export const copy = () => {
  return src(['dev/**/*','!dev/{images,scripts,styles}','!dev/{images,scripts,styles}/**/*'])
    .pipe(dest('assets'));
}

export const scripts = () => {
  return src('dev/scripts/vendor.js')
    .pipe(named())
    .pipe(webpack({
      module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: []
            }
          }
        }
      ]
    },
    mode: PRODUCTION ? 'production' : 'development',
    devtool: !PRODUCTION ? 'inline-source-map' : false,
    output: {
      filename: '[name].js'
    },
    externals: {
      jquery: 'jQuery'
    },
  }))
  .pipe(rename('main.js'))
  .pipe(dest('assets/js'));
}

export const compress = () => {
return src([
    "**/*",
    "!node_modules{,/**}",
    "!bundled{,/**}",
    "!src{,/**}",
    "!.babelrc",
    "!.gitignore",
    "!gulpfile.babel.js",
    "!package.json",
    "!package-lock.json",
  ])
  .pipe(
    gulpif(
      file => file.relative.split(".").pop() !== "zip",
      replace("_themename", info.name)
    )
  )
  .pipe(zip(`${info.name}.zip`))
  .pipe(dest('bundled'));
};

export const pot = () => {
  return src("**/*.php")
  .pipe(
      wpPot({
        domain: "_themename",
        package: info.name
      })
    )
  .pipe(dest(`languages/${info.name}.pot`));
};

export const gzippingJS = () => {
  return src('assets/js/*.js')
  .pipe(gzip())
  .pipe(dest('assets/js'));
}

export const gzippingCSS = () => {
  return src('assets/css/*.css')
  .pipe(gzip())
  .pipe(dest('assets/css'));
}


export const watchForChanges = () => {
  watch('dev/scss/**/*.scss', series(styles, modernizer, reload));
  watch('dev/images/**/*.{jpg,jpeg,png,svg,gif}', series(images, reload));
  watch(['dev/**/*','!dev/{images,js,scss}','!dev/{images,js,scss}/**/*'], series(copy, reload));
  watch('dev/js/**/*.js', series(scripts, modernizer, lint, reload));
  watch("**/*.php", reload);
}

export const dev = series(clean, parallel(styles, fonts, images, copy, scripts), serve, modernizer, lint, watchForChanges);
export const build = series(clean, parallel(styles, fonts, images, copy, scripts), modernizer, pot, criticalcss, gzippingJS, gzippingCSS, svgpng, compress);
export default dev;
