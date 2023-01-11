package com.example.conexionmultitabladb.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="departamento")
public class Departamento {
   
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name= "nombre_departamento")
    private String nombreDepartamento;

    @JsonManagedReference
    @OneToMany (mappedBy = "departamento")
    private List<Empleado> empleados;

    

    public Departamento(Long id, String nombreDepartamento, List<Empleado> empleados) {
        this.id = id;
        this.nombreDepartamento = nombreDepartamento;
        this.empleados = empleados;
    }

    public Departamento() {
    
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombreDepartamento() {
        return nombreDepartamento;
    }

    public void setNombreDepartamento(String nombreDepartamento) {
        this.nombreDepartamento = nombreDepartamento;
    }

    public List<Empleado> getEmpleados() {
        return empleados;
    }

    public void setEmpleados(List<Empleado> empleados) {
        this.empleados = empleados;
    }

    
}
