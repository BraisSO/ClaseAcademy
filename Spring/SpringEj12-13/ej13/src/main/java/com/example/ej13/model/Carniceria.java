package com.example.ej13.model;

import javax.persistence.*;


@Entity
@Table(name = "carniceros")
public class Carniceria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(name = "apellido_uno")
    private String apellido1;

    @Column(name = "apellido_dos")
    private String apellido2;

    private Integer age;

    private Integer experiencia;

    public Carniceria() {
    }

    public Carniceria(Long id, String name, String apellido1, String apellido2, Integer age, Integer experiencia) {
        this.id = id;
        this.name = name;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.age = age;
        this.experiencia = experiencia;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getApellido1() {
        return apellido1;
    }

    public void setApellido1(String apellido1) {
        this.apellido1 = apellido1;
    }

    public String getApellido2() {
        return apellido2;
    }

    public void setApellido2(String apellido2) {
        this.apellido2 = apellido2;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getExperiencia() {
        return experiencia;
    }

    public void setExperiencia(Integer experiencia) {
        this.experiencia = experiencia;
    }

}
