let btnChoseWord = document.getElementById('ChooseWordModeButton')

btnChoseWord.addEventListener('click',function(){
        document.getElementById("multiMenu").action = "multiPlayer"
        document.getElementById("multiMenu").submit();

})
