const textModal = document.getElementById("Text-Modal"),
      btnTextModal = document.getElementById('btnText'),
      btnOkText = document.getElementById('btnOkText'),
      closeText = document.getElementById('closeText'),
      outText = document.getElementById('outText');

const helpModal = document.getElementById("Help-Modal"),
      btnHelpModal = document.getElementById('btnHelp'),
      btnOkHelp = document.getElementById('btnOkHelp'),
      closeHelp = document.getElementById('closeHelp');



let form=document.getElementById('form');


function closeTextModal(){
   textModal.style.display="none";
}


function closeHelpModal(){
   helpModal.style.display="none";
}

function addTextToModal(newText){
   outText.innerHTML = newText;
}


/*Event Handler Text Modal*/
form.addEventListener('submit', function(event){
   event.preventDefault();
   let newText=document.getElementById('NewText').value;
   console.log(newText);
   addTextToModal(newText);
   textModal.style.display="flex";
})

closeText.addEventListener('click', closeTextModal)
btnOkText.addEventListener('click', closeTextModal)



/*Event Handler Help Modal*/ 

btnHelpModal.addEventListener('click', ()=>{
   helpModal.style.display="flex";
})

closeHelp.addEventListener('click', closeHelpModal)
btnOkHelp.addEventListener('click', closeHelpModal)


//Laut Online Texten relativ Unsicher, Empfehlung via HTML Einbingung
//btnHelpModal.addEventListener('click', ()=>{alert("Ohne Eingabe ist eine Textausgabe nicht möglich!");})
