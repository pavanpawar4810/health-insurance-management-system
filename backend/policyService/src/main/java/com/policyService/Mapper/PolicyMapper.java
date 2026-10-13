package java.com.policyService.Mapper;

import java.com.policyService.Dto.request.PolicyCreateRequest;
import java.com.policyService.Dto.request.PolicyUpdateRequest;
import java.com.policyService.Dto.response.PolicyResponse;
import java.com.policyService.Entity.Policy;
import java.com.policyService.Entity.PolicyStatus;
import org.springframework.stereotype.Component;

@Component
public class PolicyMapper {

    // Create Request DTO to Entity
    public Policy toEntity(
            PolicyCreateRequest request,
            String policyNumber
    ) {
        return Policy.builder()
                .policyNumber(policyNumber)
                .customerCode(request.customerCode())
                .policyType(request.policyType())
                .coverageAmount(request.coverageAmount())
                .premiumAmount(request.premiumAmount())
                .startDate(request.startDate())
                .endDate(request.endDate())
                .status(PolicyStatus.PENDING_PAYMENT)
                .build();
    }

    // Update existing Entity
    public void updateEntity(
            Policy policy,
            PolicyUpdateRequest request
    ) {
        policy.setPolicyType(request.policyType());
        policy.setCoverageAmount(request.coverageAmount());
        policy.setPremiumAmount(request.premiumAmount());
        policy.setStartDate(request.startDate());
        policy.setEndDate(request.endDate());
    }

    // Entity to Response DTO
    public PolicyResponse toResponse(Policy policy) {
        return new PolicyResponse(
                policy.getPolicyNumber(),
                policy.getCustomerCode(),
                policy.getPolicyType(),
                policy.getCoverageAmount(),
                policy.getPremiumAmount(),
                policy.getStartDate(),
                policy.getEndDate(),
                policy.getStatus(),
                policy.getCreatedAt(),
                policy.getUpdatedAt()
        );
    }

}
