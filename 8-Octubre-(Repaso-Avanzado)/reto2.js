const registroUsuarios = {
    usuarios: [],

    agregarUsuario: function(nombre) {
      const id = this.usuarios.length + 1;
      const usuario = { id, nombre };
      this.usuarios.push(usuario);
      console.log(`Nuevo Usuario: ${nombre}`);
    },

    buscarUsuario: (nombre) => {
      const usuarioEncontrado = registroUsuarios.usuarios.find(usuario => usuario.nombre === nombre);
      if (usuarioEncontrado) {
        console.log(`Usuario encontrado: ${usuarioEncontrado.nombre}`);
        return usuarioEncontrado;
      } else {
        console.log(`Usuario no encontrado: ${nombre}`);
        return null;
      }
    }
  };
  
   
  registroUsuarios.agregarUsuario('Juan');
  registroUsuarios.agregarUsuario('Maria');
  registroUsuarios.buscarUsuario('Juan');   
  registroUsuarios.buscarUsuario('Pedro'); 
  