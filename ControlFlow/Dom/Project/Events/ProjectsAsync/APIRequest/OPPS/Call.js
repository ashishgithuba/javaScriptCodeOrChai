function SetUsername(username)
{
    this.username=username
    console.log("called");

}
function createUser(username,email,password)
{
    SetUsername.call(this,username)
    this.email=email
    this.password=password

}
const javascript=new createUser("Ashish","ashish@","802312")
console.log(javascript);
