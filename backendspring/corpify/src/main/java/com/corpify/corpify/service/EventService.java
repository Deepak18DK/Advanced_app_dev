package com.corpify.corpify.service;

import java.util.List;
import java.util.Optional;

import com.corpify.corpify.dto.request.EventRequest;
import com.corpify.corpify.model.Event;

public interface EventService {
 
     String saveEvent(EventRequest eventRequest);
     Event updateEvent(EventRequest eventRequest, Long eid);
      List<Event> findAllEvent();
     public Optional<Event>getById(Long id);
}
