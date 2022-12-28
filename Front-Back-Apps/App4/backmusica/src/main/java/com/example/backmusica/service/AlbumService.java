package com.example.backmusica.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backmusica.model.Album;
import com.example.backmusica.repository.IAlbumRepository;

@Service
public class AlbumService {

    @Autowired
    IAlbumRepository albumRepository;


    public Album guardarAlbum(Album album){
        return albumRepository.save(album);
    }


    public List<Album> listarAlbums(){
        return albumRepository.findAll();
    }

    
}
