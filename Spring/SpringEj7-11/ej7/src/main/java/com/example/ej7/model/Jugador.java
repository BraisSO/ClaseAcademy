package com.example.ej7.model;

import javax.persistence.*;

@Entity
@Table(name="jugadores")
public class Jugador {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String apellido_uno;
    private String apellido_dos;
    private int estatura;
    private String posición;
    private String equipo;

    public Jugador(Long id, String nombre, String apellido_uno, String apellido_dos, int estatura, String posición,
            String equipo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido_uno = apellido_uno;
        this.apellido_dos = apellido_dos;
        this.estatura = estatura;
        this.posición = posición;
        this.equipo = equipo;
    }
        
    public Jugador(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido_uno() {
        return apellido_uno;
    }

    public void setApellido_uno(String apellido_uno) {
        this.apellido_uno = apellido_uno;
    }

    public String getApellido_dos() {
        return apellido_dos;
    }

    public void setApellido_dos(String apellido_dos) {
        this.apellido_dos = apellido_dos;
    }

    public int getEstatura() {
        return estatura;
    }

    public void setEstatura(int estatura) {
        this.estatura = estatura;
    }

    public String getPosición() {
        return posición;
    }

    public void setPosición(String posición) {
        this.posición = posición;
    }

    public String getEquipo() {
        return equipo;
    }

    public void setEquipo(String equipo) {
        this.equipo = equipo;
    }

    





    
    
}
