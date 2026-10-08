package com.healthinsurance.customer.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "customers",
       uniqueConstraints = {
        @UniqueConstraint(
                name = "uk_customer_email",
                columnNames = "email"
        ),
               @UniqueConstraint(
                       name = "uk_customer_aadhaar",
                       columnNames = "aadhaar_number"
               )
       })
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "customer_code", unique = true, length = 10)
    private String customerCode;

    @Column(name = "first_name",nullable = false, length = 100)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 100)
    private String lastName;

    @Column(name = "email" , unique = true, length = 150)
    private String email;

    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @Column(name = "date_of_birth", nullable = false)
    private LocalDate dateOfBirth;

    @Column(name = "aadhaar_number", nullable = false, length = 12)
    private String aadhaarNumber;

    @Column(name = "address", nullable = false, length = 225)
    private String address;

    @Column(name = "city", nullable = false, length = 100)
    private String city;

    @Column(name = "state", nullable = false)
    private String state;

    @Column(nullable = false, length = 10)
    private String pincode;

    @Column(nullable = false)
    private  Boolean active= true;
}
