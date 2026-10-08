package com.healthinsurance.customer.serviceImpl;

import com.healthinsurance.customer.dto.request.CustomerCreateRequest;
import com.healthinsurance.customer.dto.request.CustomerUpdateRequest;
import com.healthinsurance.customer.dto.response.CustomerResponse;
import com.healthinsurance.customer.entity.Customer;
import com.healthinsurance.customer.exception.CustomerNotFoundException;
import com.healthinsurance.customer.exception.DuplicateCustomerException;
import com.healthinsurance.customer.mapper.CustomerMapper;
import com.healthinsurance.customer.repository.CustomerRepository;
import com.healthinsurance.customer.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;
    private  final CustomerMapper customerMapper;


    @Override
    public CustomerResponse createCustomer(CustomerCreateRequest request) {

        //check duplicate email
        if (customerRepository.existsByEmail(request.email()))
        {
            throw new DuplicateCustomerException("Cutomer with this email already exist");
        }

        //customerDto to Entity
        Customer customer = customerMapper.toEntity(request,null);

        //saved Customer
        Customer savedCustomer = customerRepository.save(customer);


        //Genarte CustomerCode
        String customerCode=String.format("CUS%03d", savedCustomer.getId());

        // setCustomer code
        savedCustomer.setCustomerCode(customerCode);

        // save customer again
        Customer save = customerRepository.save(savedCustomer);

        // send Response
        return customerMapper.toResponse(save);
    }

    @Override
    public List<CustomerResponse> getAllCustomer() {
        return customerRepository.findAll()
                .stream()
                .map(customerMapper::toResponse)
                .toList();
    }

    @Override
    public CustomerResponse getCustomerBycode(String customerCode) {
        Customer customer = customerRepository.findByCustomerCode(customerCode)
                .orElseThrow(()->new CustomerNotFoundException("Customer not found with given code : "+customerCode));

        return customerMapper.toResponse(customer);
    }

    @Override
    public CustomerResponse updateCustomer(CustomerUpdateRequest updateRequest, String customerCode) {

        Customer customer = customerRepository.findByCustomerCode(customerCode)
                .orElseThrow(() -> new CustomerNotFoundException(" Customer not found for given customer : " + customerCode));

        if(!customer.getEmail().equalsIgnoreCase(updateRequest.email()))
        {
           throw  new RuntimeException("The given email id does not match with exist customer :"+updateRequest.email());

        }
        customer.setFirstName(updateRequest.firstName());
        customer.setLastName(updateRequest.lastName());
        customer.setPhoneNumber(updateRequest.phoneNumber());
        customer.setAddress(updateRequest.address());
        customer.setState(updateRequest.state());
        customer.setCity(updateRequest.city());
        customer.setPincode(updateRequest.pincode());
        customer.setEmail(updateRequest.email());
        customer.setDateOfBirth(updateRequest.dateOfBirth());
        customer.setAadhaarNumber(updateRequest.aadhaarNumber());

        //dto to entity
        customerMapper.updateEntity(updateRequest,customer);

        //saved entity
        Customer updatedCustomer = customerRepository.save(customer);

        // retrunt entity to dto
        return customerMapper.toResponse(updatedCustomer);

    }

    @Override
    public void deleteCustomer(String customerCode) {

        Customer customer = customerRepository.findByCustomerCode(customerCode)
                .orElseThrow(() -> new CustomerNotFoundException("Give Customer code deos not exist in database :" + customerCode));

        customer.setActive(false);
        customerRepository.save(customer);

    }

    @Override

    public List<CustomerResponse> serachCustomer(String keyword) {
       return customerRepository.searchCustomers(keyword)
               .stream()
               .map(customerMapper::toResponse)
               .toList();
    }
}
