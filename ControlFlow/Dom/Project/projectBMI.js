const form=document.querySelector('form')
form.addEventListener('submit',function(event)
{
    event.preventDefault()
    const height=parseInt(document.querySelector('#hegiht').value)
    const weight=parseInt(document.querySelector('#weight').value)
     const results=parseInt(document.querySelector('#results').value)
   if(height===''|| geight<0|| isNaN(height)){
results.innerHTML="Please give a valid Height"
   }
});