const express = require("express");
const router = express.Router();
const Register = require("../model/studentRegistration");

router.post("/register", async (request, response) => {
  const { firstname, lastname, email, password } = request.body;
  const body = new Register({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
  });
  try {
    const result = await body.save();
    response.json(result);
  } catch (error) {
    console.log(error);
    response.send(error);
  }
});


router.get(`/:id`, async (request, response)=>{
       const result  = await Register.findById(request.params.id)
    response.json(result)
})

module.exports = router;
