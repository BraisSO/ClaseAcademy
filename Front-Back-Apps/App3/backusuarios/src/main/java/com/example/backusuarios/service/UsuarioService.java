package com.example.backusuarios.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.backusuarios.converter.UsuarioConverter;
import com.example.backusuarios.dto.UsuarioDTO;
import com.example.backusuarios.model.Usuario;
import com.example.backusuarios.repo.IUsuarioRepo;

@Service
public class UsuarioService {
    @Autowired
    IUsuarioRepo usuarioRepo;

    @Autowired
    UsuarioConverter usuarioConverter;

    public List<Usuario> listaUsuarios(){
        return usuarioRepo.findAll();
    }

    public List<UsuarioDTO> listaDTO(){
     List<Usuario> usuarios=usuarioRepo.findAll();
     List<UsuarioDTO> usuariosDTO= new ArrayList<>();

     for (Usuario usuario : usuarios) {
        usuariosDTO.add(usuarioConverter.convertEntityToDTO(usuario));
     }

      return usuariosDTO;
    }

    public void eliminarUsuarios(Long id){
        usuarioRepo.deleteById(id);
    }

    public UsuarioDTO guardarUsuario(Usuario usuario){
        Usuario userSaved= usuarioRepo.save(usuario);
        return  usuarioConverter.convertEntityToDTO(userSaved);
    }

    public UsuarioDTO buscarUsuario(Long id){
        return usuarioConverter.convertEntityToDTO(usuarioRepo.findById(id).orElse(null)) ;
    }

    public List<UsuarioDTO> buscarPorUsername(String username){
        List<Usuario> usuarios=usuarioRepo.findByUsername(username);
        List<UsuarioDTO> usuariosDTO= new ArrayList<>();
   
        for (Usuario usuario : usuarios) {
           usuariosDTO.add(usuarioConverter.convertEntityToDTO(usuario));
        }
   
         return usuariosDTO;
       }

       public Page<Usuario> listaUsuariosPaginada(Pageable pageable){
            return usuarioRepo.findAll(pageable);
       }
   

}
