const btnCat = document.getElementById("btnCat");
btnCat.addEventListener("click", factCat);

function factCat(){
    console.log('button pressed');
    var value = document.getElementById("num_facts").value;

    if(value != ""){
        var xhttp = new XMLHttpRequest();
        const param = `number=${value}`;
        xhttp.open("GET", "/getFact?" + param, true);
        xhttp.send();
        console.log("Ajax request sent: "+param);

        xhttp.addEventListener('load', function(){
            if (xhttp.status === 200 && xhttp.readyState === 4){
                var response = JSON.parse(xhttp.responseText);
                console.log(response);
                var toPrint = "";
                for(i=0; i<value; i++){
                    toPrint += "\n";
                }
                document.getElementById("paragraphe").innerHTML = response;
        }else {
                console.error("Bad request");
            }
        })

    }
}