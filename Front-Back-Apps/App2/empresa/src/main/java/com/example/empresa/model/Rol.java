package com.example.empresa.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "roles")
public class Rol {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  @Column(name = "nombre_rol")
  private String nombrRol;

  @ManyToMany
  private List<Usuario> usuarios;

  public Rol(){}

  public Rol(Integer id, String nombrRol, List<Usuario> usuarios) {
    this.id = id;
    this.nombrRol = nombrRol;
    this.usuarios = usuarios;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getNombrRol() {
    return nombrRol;
  }

  public void setNombrRol(String nombrRol) {
    this.nombrRol = nombrRol;
  }

  public List<Usuario> getUsuarios() {
    return usuarios;
  }

  public void setUsuarios(List<Usuario> usuarios) {
    this.usuarios = usuarios;
  }

  

  


  
}
