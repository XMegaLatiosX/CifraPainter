const div = document.getElementById("container")

function ShowNotes(inptText) {//cifra
    while(div.childElementCount > 6) {div.removeChild(div.children[6])}
    inptText = inptText.replace(/[\n]/gm, " ? ")
    const cifra = inptText.split(' ')
    for(let i=0;i<cifra.length;i++) {
        if(cifra[i] == "do")        {CreateImage(1)}
        else if(cifra[i] == "do#")  {CreateImage(2)}
        else if(cifra[i] == "re")   {CreateImage(3)}
        else if(cifra[i] == "re#")  {CreateImage(4)}
        else if(cifra[i] == "mi")   {CreateImage(5)}
        else if(cifra[i] == "fa")   {CreateImage(6)}
        else if(cifra[i] == "fa#")  {CreateImage(7)}
        else if(cifra[i] == "sol")  {CreateImage(8)}
        else if(cifra[i] == "sol#") {CreateImage(9)}
        else if(cifra[i] == "la")   {CreateImage(10)}
        else if(cifra[i] == "la#")  {CreateImage(11)}
        else if(cifra[i] == "si")   {CreateImage(12)}
    
        else if(cifra[i] == "DO")   {CreateImage(13)}
        else if(cifra[i] == "DO#")  {CreateImage(14)}
        else if(cifra[i] == "RE")   {CreateImage(15)}
        else if(cifra[i] == "RE#")  {CreateImage(16)}
        else if(cifra[i] == "MI")   {CreateImage(17)}
        else if(cifra[i] == "FA")   {CreateImage(18)}
        else if(cifra[i] == "FA#")  {CreateImage(19)}
        else if(cifra[i] == "SOL")  {CreateImage(20)}
        else if(cifra[i] == "SOL#") {CreateImage(21)}
        else if(cifra[i] == "LA")   {CreateImage(22)}
        else if(cifra[i] == "LA#")  {CreateImage(23)}
        else if(cifra[i] == "SI")   {CreateImage(24)}
        else if(cifra[i] == "?") {div.appendChild(document.createElement("br"))}
    }
}


function CreateImage(notes) {
    let imagem = document.createElement("img")
    imagem.setAttribute('src', 'imgs/'+notes+'.png')
    imagem.setAttribute('class', 'notes')
    div.appendChild(imagem)
}