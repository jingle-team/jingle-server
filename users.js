   const userSchema = new mongoose.Schema({
    id:  Number,
    profilePicture: String,
    name:   String,
    friends: [],
    servers: [],
    password: String
    
  });

class User{

    Constructor()(
        const userModel = mongoose.model('userSchema', Schema);

    )

  function create() {
      const newUser = new userSchema;
      userModel.create({
  
        name: 'asdsa',

        password: 'yeahsure'

    });
  }


  function findOne(id) {
    const user = new 



  }





}
//create,
// findone(use id as parameter))findall, deletebyId(paramter)

module.exports = {
  User
};
//const user = ('path to file')
// how to import that bitch