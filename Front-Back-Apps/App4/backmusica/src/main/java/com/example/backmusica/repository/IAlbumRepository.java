package com.example.backmusica.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backmusica.model.Album;

@Repository
public interface IAlbumRepository extends JpaRepository<Album,Long> {


}
