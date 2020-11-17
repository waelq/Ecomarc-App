import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@ex.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Wael",
    email: "wael@ex.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Adel",
    email: "adel@ex.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
