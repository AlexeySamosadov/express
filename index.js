const express  = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const addRoutes = require('./routes/add');
const coursesRoutes = require('./routes/courses');
const Course = require('./models/course')

const hbs  = exphbs.create({
   defaultLayout: 'main',
   extname: 'hbs'

})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

// Регистрируем статическую папку с файлам css
app.use(express.static('public'))

// Добавляем midleware для обработки POST запросов
app.use(express.urlencoded({extended: true}))

// Регистрируем руты
app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', coursesRoutes)




const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
   console.log(`Server is running on port ${PORT}`);
})