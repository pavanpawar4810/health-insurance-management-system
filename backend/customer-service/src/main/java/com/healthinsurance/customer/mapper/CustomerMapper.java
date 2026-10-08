package com.healthinsurance.customer.mapper;

import com.healthinsurance.customer.dto.request.CustomerCreateRequest;
import com.healthinsurance.customer.dto.request.CustomerUpdateRequest;
import com.healthinsurance.customer.dto.response.CustomerResponse;
import com.healthinsurance.customer.entity.Customer;
import org.springframework.stereotype.Component;

@Component
public class CustomerMapper {

    //Dto to Entity
    public Customer toEntity(CustomerCreateRequest request, String customerCode)
    {
        return Customer.builder()
                .customerCode(customerCode)
                .firstName(request.firstName())
                .lastName(request.lastName())
                .email(request.email())
                .address(request.address())
                .aadhaarNumber(request.aadhaarNumber())
                .city(request.city())
                .pincode(request.pincode())
                .state(request.state())
                .active(true)
                .dateOfBirth(request.dateOfBirth())
                .phoneNumber(request.phoneNumber())
                .build();
    }

    //Entity to dto
    public CustomerResponse toResponse(Customer customer)
    {
        return  new CustomerResponse(
                customer.getCustomerCode(),
                customer.getFirstName(),
                customer.getLastName(),
                customer.getEmail(),
                customer.getPhoneNumber(),
                customer.getDateOfBirth(),
                customer.getAddress(),
                customer.getCity(),
                customer.getState(),
                customer.getPincode(),
                customer.getActive()
        );
    }
    // CustomerDto to Entity madhe conevrt kartoy
    public void updateEntity(CustomerUpdateRequest request, Customer customer)
    {
        customer.setFirstName(request.firstName());
        customer.setLastName(request.lastName());
        customer.setAddress(request.address());
        customer.setCity(request.city());
        customer.setEmail(request.email());
        customer.setAadhaarNumber(request.aadhaarNumber());
        customer.setDateOfBirth(request.dateOfBirth());
        customer.setPincode(request.pincode());
        customer.setPhoneNumber(request.phoneNumber());
        customer.setState(request.state());

    }
}
