package com.example.ej9.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="zapatos")
public class Zapato {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String marca;
    private Integer numero;
    private Float precio;


    public Zapato(Long id, String marca, Integer numero, Float precio) {
        this.id = id;
        this.marca = marca;
        this.numero = numero;
        this.precio = precio;
    }

    public Zapato() {     
    }

    public Long getId() {
        return id;
    }
    public String getMarca() {
        return marca;
    }
    public Integer getNumero() {
        return numero;
    }
    public Float getPrecio() {
        return precio;
    }



    
}
