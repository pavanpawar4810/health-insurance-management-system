package java.com.policyService.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(
        name = "policies",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "uk_policy_number",
                        columnNames = "policy-number"
                )
        },
        indexes = {
                @Index(
                        name = "idx_policy_customer_code",
                        columnList = "customer_code"
                ),
                @Index(
                        name = "idx_policy_status",
                        columnList = "status"
                )
        }
)

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Policy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(
            name = "policy_number",
            nullable = false,
            unique = true,
            length = 30
    )
    private String policyNumber;

    // Reference to Customer Service
    // Do not use @ManyToOne across separate microservices
    @Column(
            name = "customer_code",
            nullable = false,
            length = 20
    )
    private String customerCode;

    @Enumerated(EnumType.STRING)
    @Column(
            name = "policy_type",
            nullable = false,
            length = 30
    )
    private PolicyType policyType;

    @Column(
            name = "coverage_amount",
            nullable = false,
            precision = 15,
            scale = 2
    )
    private BigDecimal coverageAmount;

    @Column(
            name = "premium_amount",
            nullable = false,
            precision = 12,
            scale = 2
    )
    private BigDecimal premiumAmount;


    @Column(
            name = "start_date",
            nullable = false
    )
    private LocalDate startDate;

    @Column(
            name = "end_date",
            nullable = false
    )
    private LocalDate endDate;

    @Enumerated(EnumType.STRING)
    @Column(
            name = "status",
            nullable = false,
            length = 30
    )
    private PolicyStatus status;

    @Version
    private Long version;

    @Column(
            name = "created_at",
            nullable = false,
            updatable = false
    )
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        LocalDateTime now = LocalDateTime.now();
        createdAt = now;
        updatedAt = now;

        if (status == null) {
            status = PolicyStatus.PENDING_PAYMENT;
        }
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }



}
