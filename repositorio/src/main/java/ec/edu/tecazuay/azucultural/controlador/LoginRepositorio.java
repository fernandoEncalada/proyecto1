/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.tecazuay.azucultural.controlador;

import ec.edu.tecazuay.azucultural.modelo.Login;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author alumno
 */
public interface LoginRepositorio extends JpaRepository<Login, Long>{
}