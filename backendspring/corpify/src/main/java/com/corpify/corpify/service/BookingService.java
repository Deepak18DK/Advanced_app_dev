package com.corpify.corpify.service;

import java.util.List;
import java.util.Optional;

import com.corpify.corpify.dto.request.BookingRequest;
import com.corpify.corpify.dto.response.BookingResponse;



public interface BookingService {
    void saveBooking(Long userId, BookingRequest booking);
    void updateBooking(Long uid,Long bookingId, BookingRequest bookingRequest) ;
    List<BookingResponse> getAllBooking();
    void deleteBooking(Long bookingId);
    Optional<BookingResponse> getById(Long bookingId);
}
