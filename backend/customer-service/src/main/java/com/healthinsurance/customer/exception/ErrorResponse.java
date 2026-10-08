package com.healthinsurance.customer.exception;

import java.time.LocalDateTime;

public record ErrorResponse(
        LocalDateTime localDateTime,
        int status,
        String error,
        String message,
        String path
) {
}
