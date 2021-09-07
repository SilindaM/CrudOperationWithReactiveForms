package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.products;

public interface productRepository extends JpaRepository<products, Long> {

}
