package com.example.demo.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Getter;

@Getter
@Component
public class ArquivoStorageProperties {
	
	// Pega o valor da variável global dentro de application.properties
	@Value("${arquivo.uploadDir}")
	private String uploadDir;
}
