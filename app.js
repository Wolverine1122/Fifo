const express = require("express")
const path = require("path")

const recommendedResultNumber = 9;

const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.render("main")
})

app.get("/search.html", (req, res) => {
    res.render("search", {
        foodTitle: "Banana Chocolate Chip Cake With Peanut Butter Frosting - gluten free, dairy free, soy free",
        foodType: "Desert",
        foodSummary: "Vegan Dirty Chai Pudding is a <b>gluten free and dairy free</b> recipe with 6 servings. One serving contains <b>325 calories</b>, <b>5g of protein</b>, and <b>22g of fat</b>. For <b>$1.93 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. It works well as a dessert. 6 people have made this recipe and would make it again. This recipe from Foodista requires pudding, cinnamon, vanilla, and cocoa powder. From preparation to the plate, this recipe takes roughly <b>roughly 45 minutes</b>. Overall, this recipe earns a <b>pretty good spoonacular score of 76%</b>. Try <a href=\"https://spoonacular.com/recipes/dirty-chai-tapioca-pudding-with-oatmeal-raisin-cookie-crumble-940972\">Dirty Chai Tapioca Pudding with Oatmeal Raisin Cookie Crumble</a>, <a href=\"https://spoonacular.com/recipes/dirty-dirty-chai-625782\">Dirty Dirty Chai</a>, and <a href=\"https://spoonacular.com/recipes/dirty-chai-541786\">Dirty Chai</a> for similar recipes.",
        timeToCookFood: "15 minutes",
        recommendedResultNumber
    })
})

app.listen(3000)