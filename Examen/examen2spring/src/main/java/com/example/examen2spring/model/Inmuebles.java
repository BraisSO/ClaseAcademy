package com.example.examen2spring.model;

import javax.persistence.*;

@Entity
@Table(name="inmuebles")
public class Inmuebles {
    @Id 
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
    private String localidad;

    @Column(name="metros_cuadrados")
    private int metrosCuatrados;

    private int precio;

    public Inmuebles(Long id, String localidad, int metrosCuatrados, int precio) {
        this.id = id;
        this.localidad=localidad;
        this.metrosCuatrados = metrosCuatrados;
        this.precio = precio;
    }
    public Inmuebles() {
        
    }
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getLocalidad() {
        return localidad;
    }
    public void setLocalidad(String localidad) {
        this.localidad = localidad;
    }
    public int getMetrosCuatrados() {
        return metrosCuatrados;
    }
    public void setMetrosCuatrados(int metrosCuatrados) {
        this.metrosCuatrados = metrosCuatrados;
    }
    public int getPrecio() {
        return precio;
    }
    public void setPrecio(int precio) {
        this.precio = precio;
    }
 

    
}
