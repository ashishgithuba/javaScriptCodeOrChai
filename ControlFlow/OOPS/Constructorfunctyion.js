function user(username,loginCOunt,isLoggedInn)
{
    this.username=username;
    this.loginCOunt=loginCOunt;
    this.isLoggedInn=isLoggedInn;
    return this

}
const userOne=new user("Ashish kumar singh",12,true)
const userTwo=new user("Manish Siongh",13,false)
console.log(userOne);
  