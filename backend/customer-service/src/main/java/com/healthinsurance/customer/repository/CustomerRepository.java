package com.healthinsurance.customer.repository;

import com.healthinsurance.customer.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Optional<Customer>findByCustomerCode(String customerCode);
    Optional<Customer>findByEmail(String email);
    boolean existsByCustomerCode(String customerCode);
    boolean existsByEmail(String email);
    boolean existsByAadhaarNumber(String aadharNumber);

    @Query("""
        SELECT c FROM Customer c
        WHERE LOWER(c.firstName) LIKE LOWER(CONCAT('%', :keyword, '%'))
           OR LOWER(c.lastName) LIKE LOWER(CONCAT('%', :keyword, '%'))
           OR LOWER(c.email) LIKE LOWER(CONCAT('%', :keyword, '%'))
           OR LOWER(c.customerCode) LIKE LOWER(CONCAT('%', :keyword, '%'))
        """)
    List<Customer> searchCustomers(@Param("keyword") String keyword);
}
