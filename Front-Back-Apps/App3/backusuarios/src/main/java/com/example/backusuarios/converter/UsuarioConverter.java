package com.example.backusuarios.converter;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import com.example.backusuarios.dto.UsuarioDTO;
import com.example.backusuarios.model.Usuario;

@Component
public class UsuarioConverter {
    
     public UsuarioDTO convertEntityToDTO(Usuario usuario){

    //     UsuarioDTO usuarioDTO = new UsuarioDTO();
    //         usuarioDTO.setId(usuario.getId());
    //         usuarioDTO.setTelefono(usuario.getTelefono());
    //         usuarioDTO.setUsername(usuario.getUsername());

    ModelMapper modelMapper= new ModelMapper();
    UsuarioDTO usuarioDTO=modelMapper.map(usuario,UsuarioDTO.class);
    
    return usuarioDTO;
    }
}
