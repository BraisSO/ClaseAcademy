package com.example.backmusica.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
    
}
