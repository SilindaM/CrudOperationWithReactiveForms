package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.products;
import com.example.demo.Repository.productRepository;


@RestController
@RequestMapping("api/products/")
public class productController {

	 @Autowired
	 private productRepository productRepo;
	
	//getAll products
	@GetMapping("")
	public ResponseEntity<List<products>> getAllProducts(){
		try {
			List<products> productList=productRepo.findAll();
			return new ResponseEntity<>(productList,HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//Get Product by id
	@GetMapping("{id}")
	public ResponseEntity<products> getProductById(@PathVariable(value="id") Long id){
		try {
			Optional<products> oneProduct=productRepo.findById(id);
			if(oneProduct.isPresent()) {
				return new ResponseEntity<products>(oneProduct.get(),HttpStatus.OK);
			}
			else {
				return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//post product
	@PostMapping("")
	public ResponseEntity<products> postProduct(@RequestBody products product){
		try {
			products create=productRepo.save(product);
			return new ResponseEntity<products>(create,HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//delete product
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> deleteById(@PathVariable(value="id") Long id){
		try {
			productRepo.deleteById(id);
			return new ResponseEntity<>(null,HttpStatus.NO_CONTENT);
		}
		catch (Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//delete all
	@DeleteMapping("all")
	public ResponseEntity<HttpStatus> deleteAll(){
		try {
			productRepo.deleteAll();
			return new ResponseEntity<>(null,HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//update By id
	@PutMapping("{id}")
	public ResponseEntity<products>updateById(@PathVariable("id") Long id,@RequestBody products product){
		Optional<products> productId=productRepo.findById(id);
		try {
			if(productId.isPresent()) {
				products produ=productId.get();
				produ.setName(product.getName());
				produ.setDescription(product.getDescription());
				produ.setPrice(product.getPrice());
				
				return new ResponseEntity<products>(productRepo.save(produ),HttpStatus.OK);
			}
			else {
				return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
