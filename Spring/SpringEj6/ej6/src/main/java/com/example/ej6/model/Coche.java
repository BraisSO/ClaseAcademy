package com.example.ej6.model;

import javax.persistence.*;

@Entity
@Table(name = "coches")
public class Coche {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String marca;
    private String modelo;
    private Float precio;

    public Coche() {

    }

    public Coche(Long id, String marca, String modelo, Float precio) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    public Long getId() {
        return id;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public Float getPrecio() {
        return precio;
    }

    public void setPrecio(Float precio) {
        this.precio = precio;
    }

}
