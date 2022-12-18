class employee{
    constructer(name, ID, email) {
this.name=name
this.ID=ID
this.email=email


    }
get namez(){

return this.name
}


get id(){

    return this.ID
    }


    get  employee(){

        return this.employee
        }

        get role(){
            return"employee"
        }
}



router.get('./dashboard', (req, res) => {
    // get the recipes from the database
    db.Recipes.findAll()
      .then((recipes) => {
        const recipe = recipes.map(recipe => recipe.get({ plain: true }));

        res.render('dashboard', { 
          recipes, 
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    
  
      });
  });


module.exports= employee