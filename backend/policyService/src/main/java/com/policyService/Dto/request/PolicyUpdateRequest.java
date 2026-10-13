package java.com.policyService.Dto.request;

import java.com.policyService.Entity.PolicyType;
import jakarta.validation.constraints.*;

import java.math.BigDecimal;
import java.time.LocalDate;

public record PolicyUpdateRequest(
        @NotNull(message = "Policy type is required")
        PolicyType policyType,

        @NotNull(message = "Coverage amount is required")
        @DecimalMin(value = "1.00", message = "Coverage amount must be positive")
        @Digits(integer = 13, fraction = 2)
        BigDecimal coverageAmount,

        @NotNull(message = "Premium amount is required")
        @DecimalMin(value = "0.01", message = "Premium must be positive")
        @Digits(integer = 10, fraction = 2)
        BigDecimal premiumAmount,

        @NotNull(message = "Start date is required")
        @FutureOrPresent(message = "Start date cannot be in the past")
        LocalDate startDate,

        @NotNull(message = "End date is required")
        @Future(message = "End date must be in the future")
        LocalDate endDate
) {
}
