package com.example.empresa.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "departamentos")
public class Departamento {


  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(name = "nombre_departamento")
  private String nombreDepartamento;


  @JsonManagedReference
  @OneToMany(mappedBy = "departamento")
  private List<Empleado> empleados;
  

  public Departamento(){}


  public Departamento(Long id, String nombreDepartamento, List<Empleado> empleados) {
    this.id = id;
    this.nombreDepartamento = nombreDepartamento;
    this.empleados = empleados;
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
