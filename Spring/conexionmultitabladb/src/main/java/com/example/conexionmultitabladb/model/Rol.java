package com.example.conexionmultitabladb.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table (name="roles")
public class Rol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="rol_name")
    private String rolName;

    @ManyToMany
    private List<Usuario> usuarios;

 public Rol (){}

public Rol(Long id, String rolName, List<Usuario> usuarios) {
    this.id = id;
    this.rolName = rolName;
    this.usuarios = usuarios;
}

public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
}

public String getRolName() {
    return rolName;
}

public void setRolName(String rolName) {
    this.rolName = rolName;
}

public List<Usuario> getUsuarios() {
    return usuarios;
}

public void setUsuarios(List<Usuario> usuarios) {
    this.usuarios = usuarios;
}



 

}
