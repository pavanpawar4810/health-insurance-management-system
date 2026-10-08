package com.healthinsurance.customer.dto.response;

import java.time.LocalDate;

public record CustomerResponse(
        String customerCode,

        String firstName,

        String lastName,

        String email,

        String phoneNumber,

        LocalDate dateOfBirth,

        String address,

        String city,

        String state,

        String pincode,

        boolean active
) {
}
