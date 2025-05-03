const user={
    username:"Ashsih",
    usn:"017",
    welcomeMessage:function()
    {
        console.log('${this.usn},welccome to website');
        console.log(this)
    }
}
user.welcomeMessage(); 
user.usn="016"
user.welcomeMessage() 