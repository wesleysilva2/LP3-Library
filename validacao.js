function validateFormCadastro() {
    var x = document.forms["myFormC"]["Cname"].value;
    var contador = 0;
    
    if (x == "") {
      alert("O nome precisa ser preenchido");
      return false;
    }else{
        contador = contador + 1;
    }

    var x = document.forms["myFormC"]["Cemail"].value;

    if (x == ""){
      alert("O email precisa ser preenchido");
      return false;
    }else{
        contador = contador + 1;
    }

    var x = document.forms["myFormC"]["Csenha"].value;

    if (x == ""){
      alert("A senha precisa ser preenchido");
      return false;
    }else{
        contador = contador + 1;
    }

    var x = document.forms["myFormC"]["CsenhaR"].value;

    if (x == ""){
      alert("A senha precisa ser confirmada");
      return false;
    }else{
        contador = contador + 1;
    }

    if (contador == 4){
        alert("CADASTRO COMPLETO !!!")
    }
    
}

function validateFormCompra(){
    var x = document.forms["myFormCo"]["namee"].value;
    var contador = 0;
    
    if (x == "") {
      alert("O nome do estado ser preenchido");
      return false;
    }else{
        contador = contador + 1;
    }

    var x = document.forms["myFormCo"]["namec"].value;

    if (x == ""){
      alert("O nome da cidade ser preenchido");
      return false;
    }else{
        contador = contador + 1;
    }

    var x = document.forms["myFormCo"]["namer"].value;

    if (x == ""){
      alert("O nome da rua ser preenchido");
      return false;
    }else{
        contador = contador + 1;
    }

    var x = document.forms["myFormCo"]["bairro"].value;

    if (x == ""){
      alert("O nome do bairro ser preenchido");
      return false;
    }else{
        contador = contador + 1;
    }

    var x = document.forms["myFormCo"]["numeroCasa"].value;

    if (x == ""){
      alert("o numero da casa precisa ser confirmada");
      return false;
    }else{
        contador = contador + 1;
    }

    var x = document.forms["myFormCo"]["numerocep"].value;

    if (x == ""){
      alert("O CEP precisa ser confirmada");
      return false;
    }else{
        contador = contador + 1;
    }

    if (contador == 6){
        alert("CADASTRO COMPLETO !!!")
    }
    
  }