package java.com.policyService.Repository;

import java.com.policyService.Entity.Policy;
import java.com.policyService.Entity.PolicyStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PolicyRepository extends JpaRepository<Policy,Long> {

    Optional<Policy> findByPolicyNumber(String policyNumber);

    List<Policy> findByCustomerCode(String customerCode);

    List<Policy> findByStatus(PolicyStatus status);

    boolean existsByPolicyNumber(String policyNumber);

    List<Policy> findByCustomerCodeAndStatus(
            String customerCode,
            PolicyStatus status
    );
}
