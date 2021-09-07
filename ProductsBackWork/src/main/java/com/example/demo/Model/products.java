package com.example.demo.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class products {

		private Long id;
		private String name;
		private String description;
		private String price;
		
		
		public products() {
			super();
		}

		public products(Long id, String name, String description, String price) {
			super();
			this.id = id;
			this.name = name;
			this.description = description;
			this.price = price;
		}

		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}
		@Column(name="Name",nullable=false)
		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}
		@Column(name="Description",nullable = false)
		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}
		@Column(name="Price",nullable = false)
		public String getPrice() {
			return price;
		}

		public void setPrice(String price) {
			this.price = price;
		}

		@Override
		public String toString() {
			return "Products [id=" + id + ", name=" + name + ", description=" + description + ", price=" + price + "]";
		}
		
		
		
}
