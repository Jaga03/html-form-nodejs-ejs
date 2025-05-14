import bodyParser from 'body-parser';
import express from 'express';
const app = express();
const Port = 5000;

app.use(express.static('public'));


app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('Views','./Views')


app.get('/',(req ,res)=>{
    res.status(200).render('form',{docTitle:"Form Submission"})
})

app.post('/submit',(req,res)=>{
    const {name,email}= req.body;
    res.render('success' ,{name,email});
})




app.listen(Port,()=>{
    console.log(`Server is running at Port ${Port}`)
})