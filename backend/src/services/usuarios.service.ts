import Usuario from '../models/usuario.model';
import bcrypt from 'bcryptjs';

export class UsuariosService {
  async registrar(nombre: string, email: string, password: string) {
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) throw new Error('Ya existe un usuario con ese correo');

    const passwordHash = await bcrypt.hash(password, 10);
    const nuevoUsuario = new Usuario({ nombre, email, password: passwordHash });
    await nuevoUsuario.save();
    return nuevoUsuario;
  }

  async login(email: string, password: string) {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) throw new Error('Usuario no encontrado');

    const valido = await bcrypt.compare(password, usuario.password);
    if (!valido) throw new Error('Credenciales inválidas');

    return usuario;
  }

  async obtenerPerfil(id: string) {
    return await Usuario.findById(id).select('-password');
  }
}
