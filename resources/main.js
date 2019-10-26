var objApp = new Framework7();
var $$ = Dom7;
var mainView = objApp.addView('.view-main', {
  dynamicNavbar: true
});
var UserObject = new objUsuario();

fn_InitApp()

function fn_InitApp() {

  objApp.loginScreen();

  $$('.InputLogIn').on('focus', function(e){
    $(this).css("background-color", "white");
    $(this).css("color", "black");
  });

  $$('.InputLogIn').on('focusout', function(e){
    $(this).css("background", "transparent");
    $(this).css("color", "white");
  });

  $$('#btnLogin').on('click', function(e){
    objApp.closeModal('', true);
    UserObject.User = $$('#txtUser').val();
    UserObject.Password = $$('#txtPass').val();
    UserObject.Nombre = "Anna Michel";
    UserObject.ApellidoPat = "Valerio";
    UserObject.ApellidoMat = "Munoz";

    fn_Mng_Welcome();
  });
}

function fn_Mng_Welcome(){
  var CompleteName = "Bienvenida <br/>" + UserObject.NombreCompleto();
  $$('#txtUserWelcome').html('<div class="card Animate-Welcome"><div class="card-content"><div class="card-content-inner TEXT-CENTER Font-25 Font-Bold1 Font-Cursive" >'+ CompleteName +'</div></div></div>');
}
