package com.example.agendacontactos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.agendacontactos.model.Contacto;
import com.example.agendacontactos.repository.IContactoRepository;


@Service
public class ContactoService {
    @Autowired
    private IContactoRepository contactoRepository;

    public List<Contacto> listarContactos(){
        return contactoRepository.findAll();
    }

    public Contacto buscarContacto(Long id){
        return contactoRepository.findById(id).orElse(null);
    }

    public Contacto guardarContacto(Contacto contacto){
        return contactoRepository.save(contacto);
    }

    public void eliminarContacto(Long id){
        contactoRepository.deleteById(id);
    }




}
