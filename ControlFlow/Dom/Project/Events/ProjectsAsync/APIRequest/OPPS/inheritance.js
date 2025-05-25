class Animal
{
speak()
{
    console.log("The animal makes a sound");
}
}
class Dog extends Animal{
    bark()
    {
        console.log("The Dog barkss");
    }
}
const mydog=new Dog();
mydog.speak();
mydog.bark();