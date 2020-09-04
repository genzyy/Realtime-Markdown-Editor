var express = require('express')
var app = express()

app.set('view engine','ejs')
// TODO: add app.use() for css public directory
app.use(express.static("public"))

app.get('/',function(req,res){
    res.render('editor')
})

app.listen(process.env.PORT,function(){
    console.log('SERVER STARTED RUNNING...')
})
