alert("Este site não guarda nenhuma informação.")
const msgEmail = document.querySelector("#msgemail")
const msgCPF = document.querySelector("#msgcpf")
msgCPF.style.opacity = 0
msgEmail.style.opacity = 0
function validarEmail(field) {
usuario = field.value.substring(0, field.value.indexOf("@"));
dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);

if ((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
msgEmail.innerHTML="<div><font color='green'><b>E-MAIL VÁLIDO</b></font></div>";
msgEmail.style.opacity = 1
}
else{
msgEmail.innerHTML="<div><font color='red'><b>E-MAIL INVÁLIDO</b></font><div>";
msgEmail.style.opacity = 1
return
}
}
function validarCPF(field){
  var soma;
  var resto;
  var resultado;
  var cpf
  cpf = field.value;
  cpf = cpf.replace(/[^\d]+/g, "") //remove todos os caracteres que não são números
  soma = 0;
  if (cpf == "00000000000") return false;
  
  for (i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11-i);
  resto = (soma * 10) % 11;
  
  if ((resto == 10) || (resto == 11)) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) {resultado = false;}
  
  soma = 0;
  for (i = 1; i <= 10; i++)soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
  resto = (soma * 10) % 11
  
  if ((resto == 10) || (resto == 11)) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))){resultado = false;
                                               } else resultado = true;
  
  if (resultado == false){
    msgCPF.innerHTML="<div><font color='red'><b>CPF INVÁLIDO</b></font></div>";
    msgCPF.style.opacity = 1
    return
  } else if (resultado == true){
    msgCPF.innerHTML="<div><font color='green'><b>CPF VÁLIDO<b></font></div>";
    msgCPF.style.opacity = 1
  }
}