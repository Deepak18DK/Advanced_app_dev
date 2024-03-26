package com.corpify.corpify.service;

import java.util.List;

import com.corpify.corpify.dto.request.PaymentRequest;
import com.corpify.corpify.dto.response.PaymentResponse;

public interface PaymentService {
    void savePayment(Long userId, PaymentRequest paymentRequest); 
    void updatePayment(Long uid,Long paymentId, PaymentRequest paymentRequest); 
    List<PaymentResponse> getAllPayment();
    void deletePayment(Long paymentId); 
}
