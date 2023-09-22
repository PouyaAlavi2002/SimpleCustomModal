let _prompt = document.getElementById('myPrompt')
function popUp(){
        _prompt.style.top='100px'
        _prompt.parentElement.style.backgroundColor = 'gray'
}

function closePopUp(){
    _prompt.style.top='-90%'
    _prompt.parentElement.style.background = 'white'
}