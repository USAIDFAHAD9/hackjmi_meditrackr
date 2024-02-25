import { auth } from "./firebase";
const currentUser = auth.currentUser;
const email = currentUser ? currentUser.email : "";
const userName = currentUser ? currentUser.displayName : "";
const photoURL = currentUser ? currentUser.photoURL : "";
console.log(email);
console.log(userName);
export const UserInfo = {
  email: email,
  userName: userName,
  photoURL: photoURL,
  phoneNo: "",
  bloodGroup: "",
  age: "",
  weight: "",
  height: "",
  BMI: "",
  gender: "",
};
