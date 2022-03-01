let myText = []
let oldTexts = []
const saveBtn = document.getElementById('save-btn')
const userInput = document.getElementById('user-input')
const ol = document.getElementById('ol')
const deleteBtn = document.getElementById('delete-btn')
const textFromLocalStorage = JSON.parse( localStorage.getItem('myText'))
const tabBtn = document.getElementById('saveTab-btn')

if(textFromLocalStorage){
    myText = textFromLocalStorage
    render(myText)
}

tabBtn.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true }, function(tabs){
        myText.push(tabs[0].url)
        localStorage.setItem('myText', JSON.stringify( myText))
          render(myText)
      })
      

})

    function render(text){   
    let list = ''
    for (let i = 0; i < text.length; i++) {
        // list += '<li> <a target="_blank" href="' + myText[i] + '">' + myText[i] + '</a></li> '   
        list += `<li>
         <a target="_blank" href=" '${text[i]}  + '">${text[i]}</a>
         </li> `   
        
    }
    ol.innerHTML = list
    }



saveBtn.addEventListener('click', function(){
    myText.push(userInput.value) 
    userInput.value =''
localStorage.setItem('myText', JSON.stringify( myText))
    render(myText)
    // console.log(localStorage.getItem('myText'))
})


userInput.addEventListener('keypress', function(){
    if(event.keyCode === 13){
        event.preventDefault()
        saveBtn.click()
    }
})


deleteBtn.addEventListener('dblclick', function(){
         localStorage.clear()
    myText = []
        render(myText)
   
   
})


