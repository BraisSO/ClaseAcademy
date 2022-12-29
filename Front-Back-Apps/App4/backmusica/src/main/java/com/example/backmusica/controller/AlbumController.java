package com.example.backmusica.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backmusica.model.Album;
import com.example.backmusica.service.AlbumService;

@CrossOrigin({"*"})
@RestController
@RequestMapping("/api")
public class AlbumController {

    @Autowired
    AlbumService albumService;

    @PostMapping("/guardar-album") //http://localhost:8080/api/guardar-album
    public Album guardarBanda(@RequestBody Album album){
        return albumService.guardarAlbum(album);
    }

    @GetMapping("/listar-albums") //http://localhost:8080/api/listar-albums
    public List<Album> listarAlbums(){
        return albumService.listarAlbums();
    }

    @DeleteMapping("/eliminarAlbum-{id}")//http://localhost:8080/api/eliminarAlbum-{id}
    public void eliminarPorId(@PathVariable Long id){
        albumService.deleteById(id);
       
    }    

    @PutMapping("modificarAlbum/{id}")//http://localhost:8080/api/modificarAlbum/{id}
    public Album modificar(@PathVariable Long id, @RequestBody Album album){
        Album albumEncontrado= albumService.encontrarPorId(id);
        albumEncontrado.setNombre(album.getNombre());

        return albumService.guardarAlbum(albumEncontrado);
    }
}
