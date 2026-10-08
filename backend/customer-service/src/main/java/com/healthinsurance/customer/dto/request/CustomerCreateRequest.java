package com.healthinsurance.customer.dto.request;

import jakarta.validation.constraints.*;

import java.time.LocalDate;

public record CustomerCreateRequest (

        @NotBlank(message = "First name is required")
        String firstName,

        @NotBlank(message = "Last name is required")
        String lastName,

        @NotBlank(message = "Email is required")
        @Email(message = "Invalid email format")
        String email,

        @NotBlank(message = "Phone number is required")
        @Pattern(
                regexp = "^[0-9]{10}$",
                message = "Phone number must contain 10 digits"
        )
        String phoneNumber,

        @NotNull(message = "Date of birth is required")
        @Past(message = "Date of birth must be in the past")
        LocalDate dateOfBirth,

        @Pattern(
                regexp = "^[0-9]{12}$",
                message = "Aadhaar number must contain 12 digits"
        )
        String aadhaarNumber,

        @NotBlank(message = "Address is required")
        String address,

        @NotBlank(message = "City is required")
        String city,

        @NotBlank(message = "State is required")
        String state,

        @NotBlank(message = "Pincode is required")
        @Pattern(
                regexp = "^[0-9]{6}$",
                message = "Pincode must contain 6 digits"
        )
        String pincode
){
}
