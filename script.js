alert("Este projeto não armazena nenhum dado inserido!")
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
document.getElementById("msgemail").innerHTML="E-mail válido";
alert("E-mail valido");
}
else{
document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
alert("E-mail invalido");
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
    alert("CPF inválido.")
    return
  } else if (resultado == true){
    alert("CPF válido.")
  }
}