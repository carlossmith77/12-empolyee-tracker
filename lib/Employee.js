class Employee {

    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }


    getEmail() {
        return this.email
    }

    getRole() {
        return "employee"
    }
}



// router.get('./dashboard', (req, res) => {
//     // get the recipes from the database
//     db.Recipes.findAll()
//         .then((recipes) => {
//             const recipe = recipes.map(recipe => recipe.get({ plain: true }));

//             res.render('dashboard', {
//                 recipes,
//                 loggedIn: req.session.loggedIn
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);


//         });
// });


module.exports = Employee