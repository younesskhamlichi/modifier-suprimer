document.getElementById("button").onclick = function(){
  // création de la ligne à insérer
  let tr = document.createElement('tr');
  let table = document.getElementById('table');
  let nom = document.getElementById("nom").value;
  let text = document.createTextNode(nom);
  const node = document.createElement("td");
  node.appendChild(text);
  tr.appendChild(node);
  table.appendChild(tr);  

  // nom
  let regexnom =/^[a-zA-Z]{1,30}$/;
  if(nom == ""  || nom.length > 30 || regexnom.test("nom")===false){
    document.getElementById("error").innerHTML='Le nom est obligatoire et ne doit pas dépasser 30 caractères'; 
  }

  // mark
  let mark=document.getElementById("marque").value;
  let textmarque=document.createTextNode(mark);
  const nod=document.createElement('td');
  nod.appendChild(textmarque);
  tr.appendChild(nod);
  table.appendChild(tr)
  
  // prix
  let sonprix=document.getElementById("sonprix").value;
  let textsonprix=document.createTextNode(sonprix);
  const nods=document.createElement('td');
  nods.appendChild(textsonprix);
  tr.appendChild(nods);
  table.appendChild(tr)

  // date
  let sondate = document.getElementById("sondate").value;
  let textsondate = document.createTextNode(sondate);
  const nodsD = document.createElement('td');
  nodsD.appendChild(textsondate);
  tr.appendChild(nodsD);
  table.appendChild(tr)
          
  // type
  let marque23=document.getElementById("marque2").value;
  const nods2=document.createElement('td');
  let textmarque2=document.createTextNode(marque23);
  nods2.appendChild(textmarque2);
  tr.appendChild(nods2);
  table.appendChild(tr);
  
  // oui/non
  let valueoui = document.getElementById("oui").value;
  let valuenon = document.getElementById("non").value;
  let chekboksoui = document.getElementById("oui").checked;
  let chekboksnon = document.getElementById("non").checked;
  if(chekboksoui==true){
    let promo=document.createElement("td");
    let textV=document.createTextNode(valueoui); 
    promo.appendChild(textV);
    tr.appendChild(promo);
    table.appendChild(tr); 
  }
  if(chekboksnon==true){
    let promos2=document.createElement("td");
    let textN=document.createTextNode(valuenon);
    promos2.appendChild(textN);
    tr.appendChild(promos2);
    table.appendChild(tr); 
  }
  
  // modifier && suprimer
  let btnTex = "modifier"; 
  let buttons = document.createElement("button");
  let tdtext  = document.createElement('td');
  let textbtn = document.createTextNode(btnTex);
  buttons.appendChild(textbtn);
  tdtext.appendChild(buttons);
  tr.appendChild(tdtext);
  table.appendChild(tr);

  let btnTexs= "suprimer";
  let button = document.createElement('button');
  let textbtns=document.createTextNode(btnTexs);
  button.appendChild(textbtns);
  tdtext.appendChild(button);
  tr.appendChild(tdtext);
  table.appendChild(tr);
  button.setAttribute('onclick',"suprimer(this)" );
  buttons.setAttribute('onclick',"modifier2()");
  document.getElementById("Form").reset();
}

function suprimer(btn){
  btn.parentElement.parentElement.remove()   
}

let rIndex;

function modifier2(){
  for(let i=0 ; i<=table.rows.length;i++){
    table.rows[i].onclick=function(){
      // this = la ligne sur laquelle on a cliqué
      rIndex=this.rowIndex; // le numéro de la ligne
     document.getElementById('nom').value  =  this.cells[0].innerHTML ;
      document.getElementById('marque').value = this.cells[1].innerHTML ;
      document.getElementById('sonprix').value = this.cells[2].innerHTML ;
      document.getElementById('sondate').value = this.cells[3].innerHTML ;
      if(this.cells[5].innerHTML == "oui")
        document.getElementById('oui').checked = true;
      else if(this.cells[5].innerHTML == "non")
        document.getElementById('non').checked = true;
      //   document.getElementById('oui').checked.value =this.cells[5].innerHTML ;
      // document.getElementById('non').checked.value = this.cells[5].innerHTML ;
    }
  } 
} 

function EditRow(){
    table.rows[rIndex].cells[0].innerHTML = document.getElementById('nom').value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById('marque').value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById('sonprix').value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById('sondate').value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById('marque2').value;
    if(document.getElementById("oui").checked){
      table.rows[rIndex].cells[5].innerHTML = "oui";
  }
  else if(document.getElementById("non").checked){
  table.rows[rIndex].cells[5].innerHTML = "non";
  }
}