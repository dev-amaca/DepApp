function objUsuario(){
  this.IDUsuario = 0;
  this.User = "";
  this.Password = "";
  this.Nombre = "";
  this.ApellidoPat = "";
  this.ApellidoMat = "";
  this.NombreCompleto = function(){
                          return this.Nombre + " " + this.ApellidoPat + " " + this.ApellidoMat;
                        };
  }
