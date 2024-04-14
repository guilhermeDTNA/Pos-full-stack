package com.example.demo.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Estudante;

// Define que a classe vai ser gerenciada pelo Spring	
@Service
public class EstudanteService {
	private static Map<Long, Estudante> listaEstudantes = new HashMap<>();
	
	public ResponseEntity<Estudante> buscarEstudantePorId(Long id){
		Estudante estudante = listaEstudantes.get(id);
		
		if(estudante == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
		
		return ResponseEntity.status(HttpStatus.OK).body(estudante);
	}
	
	public List<Estudante> buscarEstudantes(){
		
		return new ArrayList<>(listaEstudantes.values());
	}
	
	public ResponseEntity<Estudante> cadastrarEstudante(Estudante estudante){
		Estudante estudanteEncontrado = listaEstudantes.get(estudante.getId());
		
		listaEstudantes.put(estudante.getId(), estudante);
		
		return ResponseEntity.status(HttpStatus.OK).body(estudanteEncontrado);
	}
	
	public ResponseEntity<Estudante> editarEstudante(Long id, Estudante estudante){
		Estudante estudanteEncontrado = listaEstudantes.get(id);
		
		if(estudanteEncontrado == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
		
		listaEstudantes.put(id, estudante);
		
		return ResponseEntity.status(HttpStatus.OK).body(estudanteEncontrado);
	}
	
	public ResponseEntity<String> excluirEstudante(Long id){
		Estudante estudanteEncontrado = listaEstudantes.get(id);
		
		if(estudanteEncontrado == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
		
		listaEstudantes.remove(id);
		
		return ResponseEntity.status(HttpStatus.OK).body("Estudante deletado com sucesso!");
	}
}
