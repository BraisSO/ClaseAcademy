package com.example.backusuarios.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backusuarios.dto.UsuarioDTO;
import com.example.backusuarios.model.Usuario;
import com.example.backusuarios.service.UsuarioService;

@CrossOrigin({"*"})
@RestController
@RequestMapping("/api/usuario")

public class UsuarioController {
    
    @Autowired
    private UsuarioService usuarioService;
     
    @GetMapping("/list") //http://localhost:8080/api/usuario/list
    public List<Usuario> list(){
       return usuarioService.listaUsuarios();
    }

    @GetMapping("/listDTO") //http://localhost:8080/api/usuario/listDTO
    public List<UsuarioDTO> listDTO(){
       return usuarioService.listaDTO();
    }

    @DeleteMapping ("/delete/{id}") //http://localhost:8080/api/usuario/delete/{id}
    public void delete(@PathVariable Long id){
      usuarioService.eliminarUsuarios(id);
    }

    @PostMapping ("/save")  //http://localhost:8080/api/usuario/save
    public UsuarioDTO save(@RequestBody Usuario usuario){
      return usuarioService.guardarUsuario(usuario);
    }

    @GetMapping("/{id}") //http://localhost:8080/api/usuario/{id}
    public UsuarioDTO show (@PathVariable Long id){
      return usuarioService.buscarUsuario(id);
    }

    @GetMapping("/by-username/{username}") //http://localhost:8080/api/usuario/by-username/{username}
    public List<UsuarioDTO> showByUsername (@PathVariable String username){
      return usuarioService.buscarPorUsername(username);
    }


    @GetMapping("/lista-paginada/{pagina}") //http://localhost:8080/api/usuario/lista-paginada/{pagina}
    public Page<Usuario> listPaginada(@PathVariable int pagina){
      return usuarioService.listaUsuariosPaginada(PageRequest.of(pagina, 2));
    }
}
