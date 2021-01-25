const express = require("express");
const router = express.Router();

router.use(function(req,res,next){
    next();
})

let recipesArray = [
  { id: 1, name: "Easy Butter Chicken",prep: "15mins",Cook: "35min",
  ingredients: "1 lemon juiced,2 tsp ground cumin,1 onion chopped,3 garlic cloves crushed,cooked basmati rice", 
  methods: "Add the spices with the tomato purée, cook for a further 2 mins until fragrant, then add the stock and marinated chicken. Cook for 15 mins, then add any remaining marinade left in the bowl. Simmer for 5 mins, then sprinkle with the toasted almonds. Serve with rice, naan bread, chutney, coriander and lime wedges, if you like."},
  { id: 2, name: "Easy Classic Lasagne" ,prep: "15mins",Cook: "1min",
  ingredients: "1 lemon juiced,2 tsp ground cumin,1 onion chopped,3 garlic cloves crushed,cooked basmati rice", 
  methods: "Heat oven to 200C/180C fan/gas 6. To assemble the lasagne, ladle a little of the ragu sauce into the bottom of the roasting tin or casserole dish, spreading the sauce all over the base. Place 2 sheets of lasagne on top of the sauce overlapping to make it fit, then repeat with more sauce and another layer of pasta. Repeat with a further 2 layers of sauce and pasta, finishing with a layer of pasta."},
];

router.get("/things", (req, res) => {
  return res.send(recipesArray);
});

router.get("/things/:id", (req, res) => {
  let requestedID = req.params.id;
  let recipe = recipesArray.find((recipe) => recipe.id == requestedID);
  if (!recipe) {
    return res
      .status(404)
      .send("The Recipe does not exist in the book");
  }
  return res.status(200).send(recipe);
});

router.put("/things/:id", (req, res) => {
  let requestedID = req.params.id;
  let recipe = recipeArray.find((recipe) => recipe.id == requestedID);
  if (!recipe) {
    return res
      .status(404)
      .send("The Recipe does not exist on the MCU");
  }

  recipe.name = req.body.name;
  return res.send(recipe);
});

router.post("/things", (req, res) => {
  if (!req.body.name) {
    return res
      .status(400)
      .send("The Recipe Name is required");
  }

  let newrecipe = {
    id: recipesArray.length + 1,
    name: req.body.name,
  };
  recipesArray.push(newrecipe);
  return res.send(newrecipe);
});

router.delete("/things/:id", (req, res) => {
  let recipe = recipesArray.find((b) => b.id == req.params.id);
  if (!recipes) {
    res.status(404).send("The Recipe does not exist on the book");
    return;
  }

  let index = recipesArray.indexOf(recipe);
  recipesArray.splice(index, 1);

  res.send(recipe);
});

module.exports = router;
