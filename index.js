function signup(userName) {
    const users = ["Alice", "Bob", "Charlie"]; 
    
    if (users.includes(userName)) {
      return "User Already Registered, Please Login";
    } else {
      users.push(userName); 
      return "Signup Successful, Please Login";
    }
  }
  module.exports = { signup };

function login(userName, password) {
    const users = ["Alice", "Bob", "Charlie"];
    const correctPassword = "Emp@123"; 
  
    if (!users.includes(userName)) {
      return "User Not Found, Please Signup";
    } else if (password !== correctPassword) {
      return "Wrong Password....";
    } else {
      return "Login Successful...";
    }
  }
  
  module.exports = { signup, login };