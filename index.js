/*const bodyParser = require("body-parser");*/
const express = require("express");
const app = express();

app.set('view engine','ejs');

// static
app.use(express.static('public'));

//rotas

///
app.get("/",(req,res)=>{
                  res.render("home/index")
});

/*
///
app.get("/faleComAgente",(req,res)=>{

                  res.render("faleComAgente/index")
});
*/



app.listen(process.env.PORT || 1011, function (erro) {

        erro ?
                console.log("opa aconteceu um erro!") :
                console.table(["oba servidor rodando!", "localhost:1011"]);
                

});