const express =require("express");
const bodyParser = require("body-parser");
const path =require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/registers");
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use(express.json());
//app.use(express.urlencoded({extened: false}));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);


/*app.get("/", (req, res) => {
    res.render("index")
});*/

app.get("/", (req, res) => {
    res.render("register")
});

app.get("/login", (req, res) => {
    res.render("login")
});

app.get("/techOrigami", (req, res) => {
    res.render("techOrigami")
});

app.get("/startHere", (req, res) => {
    res.render("startHere")
});

app.get("/book", (req, res) => {
    res.render("book")
});

app.get("/diagram", (req, res) => {
    res.render("diagram")
});

app.get("/video", (req, res) => {
    res.render("video")
});

app.get("/blog", (req, res) => {
    res.render("blog")
});

app.get("/blog1", (req, res) => {
    res.render("blog1")
});

app.get("/blog2", (req, res) => {
    res.render("blog2")
});

app.get("/blog3", (req, res) => {
    res.render("blog3")
});

app.get("/blog4", (req, res) => {
    res.render("blog4")
});

app.get("/blog5", (req, res) => {
    res.render("blog5")
});

app.get("/blog6", (req, res) => {
    res.render("blog6")
});

app.get("/blowfish", (req, res) => {
    res.render("blowfish")
});

app.get("/bullDog", (req, res) => {
    res.render("bullDog")
});

app.get("/cat", (req, res) => {
    res.render("cat")
});

app.get("/crab", (req, res) => {
    res.render("crab")
});

app.get("/dog", (req, res) => {
    res.render("dog")
});

app.get("/duck", (req, res) => {
    res.render("duck")
});

app.get("/fish", (req, res) => {
    res.render("fish")
});

app.get("/fox", (req, res) => {
    res.render("fox")
});

app.get("/goldFish", (req, res) => {
    res.render("goldFish")
});

app.get("/killerWhale", (req, res) => {
    res.render("killerWhale")
});

app.get("/owl", (req, res) => {
    res.render("owl")
});

app.get("/panda", (req, res) => {
    res.render("panda")
});

app.get("/parrot", (req, res) => {
    res.render("parrot")
});

app.get("/penguin", (req, res) => {
    res.render("penguin")
});

app.get("/seal", (req, res) => {
    res.render("seal")
});

app.get("/sparrow", (req, res) => {
    res.render("sparrow")
});

app.get("/swan", (req, res) => {
    res.render("swan")
});

app.get("/whale", (req, res) => {
    res.render("whale")
});

app.get('/logout', (req, res) => {
    //res.clearCookie('nToken');
    return res.redirect("login");
  });

app.post("/", async (req, res) => {
    try {
        const pwd = req.body.password;
        const cpwd = req.body.confirmpassword;
        if(pwd==cpwd) {
            const reg = new Register({
                name: req.body.name,
                email: req.body.email,
                password: req.body.pwd,
                confirmpassword: req.body.cpwd
            })
        const registered = await reg.save();
        res.status(201).render("login");
        } else {
            res.send("Invalid Password..")
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post("/login", async(req, res) => {
    try {
        const email = req.body.email;
        const pwd = req.body.pwd;
        const useremail = await Register.findOne({email: email});
        if(useremail.password==pwd) {
            res.status(201).render("techOrigami");
        } else {
            res.send("Invalid Login....");
        }

    } catch(error) {
        res.status(400).send("Invalid Login");
    }
});


app.listen(port, () => {
    console.log(`server is running at port number ${port}`);
})