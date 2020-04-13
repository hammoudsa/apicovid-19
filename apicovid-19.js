
var resposta
var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
        this.resposta = JSON.parse(xmlHttp.responseText); 
        console.log('RESPOSTA :: ', this.resposta);

        for(let i=0; i<this.resposta.length; i++){
            var content = 
            "<div class='cidade'>" + 
                this.resposta[i].name + 
            '</div>' + 
            '<div>' + 
                'Casos: ' + this.resposta[i].qtd_confirmation  + 
            '</div>'; 

            var spn = document.createElement('div');
            spn.innerHTML = content;
            spn.id = 'teste'+i;
            if(this.resposta[i].qtd_confirmation >= 1000){
                spn.className = "card danger"
            }else if(this.resposta[i].qtd_confirmation >= 200 && this.resposta[i].qtd_confirmation < 1000){
                spn.className = "card alert" 
            }else if(this.resposta[i].qtd_confirmation < 200){
                spn.className = "card" 
            }
            document.getElementById('conteudo').appendChild(spn);
        }
    }
}
xmlHttp.open("GET", "https://api.covid19.finspect.me/brcovid19/map", true); // true for asynchronous 
xmlHttp.send(null);
