

function validacao(){
  let n = document.getElementById("i_nome");
  let s = document.getElementById("i_snome");
  let tel = document.getElementById("tel");
  let i_email = document.getElementById("email");
  let cv = document.getElementById("up");
  
    
  estilo_input(n, "#f45656", "#808080");
  estilo_input(s, "#f45656", "#808080");
  estilo_input(tel, "#f45656", "#808080");
  estilo_input(i_email, "#f45656", "#808080");
  estilo_input(cv, "#f45656", "#808080");

}

function estilo_input(input, cor_1, cor_2){

    var alert = document.getElementById("alerta");

    if(!input.checkValidity()){
        alert.style.display = "block";
        return input.style.border = `3px solid ${cor_1}`;
    } else{
      alert.style.display = "block";
      return input.style.border = `1px solid ${cor_2}`;
      }
    }
      

      

        //function i_cadastrar(){
         // window.location.href = 'cadastro_ok.html'
       // }
      
      
     