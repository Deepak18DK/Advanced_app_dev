package com.corpify.corpify.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.corpify.corpify.dto.request.EventRequest;
import com.corpify.corpify.model.Event;
import com.corpify.corpify.service.EventService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/event/")
@RequiredArgsConstructor
@Tag(name = "Event", description = "Endpoints for user authentication")
public class EventController {

    private final EventService eventService;
    @PostMapping("/saveEvent")
    public String saveEvent(@RequestBody EventRequest eventRequest) {
        return eventService.saveEvent(eventRequest);
    }
    @GetMapping("/getAllEvent")
    public List<Event> getAllEvent() {
        return eventService.findAllEvent();
    }
    @PutMapping("updateEvent/{id}")
    public Event updateEvent(EventRequest eventRequest,@PathVariable Long id) {
        return eventService.updateEvent(eventRequest, id);
    }
    @GetMapping("/getById/{id}")
    public  Optional<Event> getEventById(@PathVariable Long id) {
        return eventService.getById(id);
    }

}
