package com.example.backusuarios.dto;

public class UsuarioDTO {

    //Tener en cuenta la notación de @JsonIgnorer para ignorar propiedades si queremos agilizar el paso de datos al JSON
    
    private Long id;
    private String username;
    private Integer telefono;

    public UsuarioDTO(){

    }

    public UsuarioDTO(Long id, String username, Integer telefono) {
        this.id = id;
        this.username = username;
        this.telefono = telefono;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getTelefono() {
        return telefono;
    }

    public void setTelefono(Integer telefono) {
        this.telefono = telefono;
    }

    

    
}
