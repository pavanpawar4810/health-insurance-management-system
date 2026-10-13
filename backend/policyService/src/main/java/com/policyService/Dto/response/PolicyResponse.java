package java.com.policyService.Dto.response;

import java.com.policyService.Entity.PolicyStatus;
import java.com.policyService.Entity.PolicyType;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

public record PolicyResponse(
        String policyNumber,
        String customerCode,
        PolicyType policyType,
        BigDecimal coverageAmount,
        BigDecimal premiumAmount,
        LocalDate startDate,
        LocalDate endDate,
        PolicyStatus status,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
}
