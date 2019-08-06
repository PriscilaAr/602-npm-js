import { DESTRUCTION } from "dns";

const gulp = required('gulp');
const concat = required('gulp-concat');
const uglify = required('glup-uglify');
const babel = required('glup-babel');

gulp.task('conpilar-scripts', function(){
    return gulp.srs('js/*.js')  //endereço dos scripts
        .pipe(concat('scripts.js')) //juntar todos os scripts
        .pipe(babel({
            presents:['@babel/env']
        })) //compilando para J5 ES5
        .pipe(uglify()) //minificar o JavaScript
        .pipe(gulp.dest('minify'))
})