$(document).ready(function () {

  $('.phone_with_ddd_sp').mask('(00) 00000-0000');

});

function gerarLink() {
  let telefone = document.getElementById('telefone').value;
  let mensagem = document.getElementById('mensagem').value;

  if (telefone != "" && mensagem != "") {
    $("#formulario").hide();
    $("#resultado").html('<div class="link-gerado"><img class="icone-link" src="./images/botao-de-link.png"><span class="link">Link gerado!</span><input type = "text" id = "linkcopiar" value = "https://api.whatsapp.com/send?phone=55' + telefone + '&text=' + mensagem + '"></div > <div class= "link-mensagem" ><img class="icon-ok" src="./images/icon-ok.gif"> <b>Pronto!</b> Copie e compartilhe com usuários do Whatsapp!</div><div class="link-botoes"><div style="text-align:center;" class= "row"><div class= "col-md-6" > <button type="button" class="btn btn-outline-primary btn-lg" onclick="copyToClipBoard()">Copiar Link</button></div><div class="col-md-6"><button type="button" class="btn btn-outline-primary btn-lg" onclick="gerarNovoLink()">Gerar Novo Link</button></div><div class="col-md-12 mb-5 mt-5"><div class=""></div></div></div ></div > ');
    $("#resultado").show();


  } else {
    alert("Você deve preencher todos os campos!");
  }


}
// Falta ajustar a cópia do link pelo botão e gerar novo link, validar campos

function gerarNovoLink() {
  $("#formulario").show();
  $("#resultado").hide();
}

function copyToClipBoard() {
  let textoCopiado = document.getElementById('linkcopiar');
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("O texto é: " + textoCopiado.value);

}

