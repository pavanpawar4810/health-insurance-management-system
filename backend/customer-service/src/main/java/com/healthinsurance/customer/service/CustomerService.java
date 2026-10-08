package com.healthinsurance.customer.service;

import com.healthinsurance.customer.dto.request.CustomerCreateRequest;
import com.healthinsurance.customer.dto.request.CustomerUpdateRequest;
import com.healthinsurance.customer.dto.response.CustomerResponse;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerService {

    CustomerResponse createCustomer(CustomerCreateRequest request);
    List<CustomerResponse>getAllCustomer();
    CustomerResponse getCustomerBycode(String customerCode);
     CustomerResponse updateCustomer(CustomerUpdateRequest updateRequest, String customerCode);
     void deleteCustomer(String customerCode);


     List<CustomerResponse>serachCustomer(@Param("keyword") String keyword);


}
