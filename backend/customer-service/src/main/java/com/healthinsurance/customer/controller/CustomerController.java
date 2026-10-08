package com.healthinsurance.customer.controller;


import com.healthinsurance.customer.dto.request.CustomerCreateRequest;
import com.healthinsurance.customer.dto.request.CustomerUpdateRequest;
import com.healthinsurance.customer.dto.response.CustomerResponse;
import com.healthinsurance.customer.service.CustomerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/api/v1/customers")
@RequiredArgsConstructor
@RestController
public class CustomerController {

    private final CustomerService customerService;

    @PostMapping
    public ResponseEntity<CustomerResponse>addCustomer(@Valid @RequestBody CustomerCreateRequest request)
    {
        CustomerResponse customer = customerService.createCustomer(request);
        return  ResponseEntity
                .status(HttpStatus.CREATED)
                .body(customer);
    }


    @GetMapping("/{code}")
    public ResponseEntity<CustomerResponse>getCustomerByCode(@PathVariable String code)
    {
        CustomerResponse customerBycode = customerService.getCustomerBycode(code);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(customerBycode);
    }

    @GetMapping
    public ResponseEntity<List<CustomerResponse>>getAllCustomer()
    {
        List<CustomerResponse> allCustomer = customerService.getAllCustomer();
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(allCustomer);
    }

    @PutMapping("/{customerCode}")
    public ResponseEntity<CustomerResponse>updateCustomer(@PathVariable String customerCode, @Valid @RequestBody CustomerUpdateRequest request)
    {
        CustomerResponse customerResponse = customerService.updateCustomer(request, customerCode);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(customerResponse);
    }

    @DeleteMapping("/{customerCode}")
    public ResponseEntity<String> deleteCustomer(@PathVariable String customerCode)
    {
        customerService.deleteCustomer(customerCode);
        return ResponseEntity.ok("Customer deleted succesfully");
    }

    @GetMapping("/search")
    public ResponseEntity<List<CustomerResponse>>searchAllCustomer(@RequestParam String keyword)
    {
        List<CustomerResponse> customerResponses = customerService.serachCustomer(keyword);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(customerResponses);
    }


}


