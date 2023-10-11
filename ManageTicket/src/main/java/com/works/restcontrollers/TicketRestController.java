package com.works.restcontrollers;


import com.works.models.Ticket;
import com.works.services.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/ticket")
public class TicketRestController {

    final TicketService ticketService;

    @PostMapping(value = "/save")
    public ResponseEntity save( @Valid @RequestBody Ticket ticket ) {
        return ticketService.save(ticket);
    }

    @GetMapping("/list")
    public ResponseEntity list() {
        return ticketService.list();
    }

    @GetMapping("/list/{oid}")
    public ResponseEntity list(@PathVariable Long oid) {
        return ticketService.list(oid);
    }

    @GetMapping("/detail/{tid}")
    public ResponseEntity detail(@PathVariable Long tid) {
        return ticketService.detail(tid);
    }

    @GetMapping("/delete/{tid}")
    public ResponseEntity delete(@PathVariable Long tid) {
        return ticketService.delete(tid);
    }

    @PostMapping("/update/{tid}")
    public ResponseEntity update(@PathVariable Long tid, @Valid @RequestBody Ticket ticket) {
        return ticketService.update(tid, ticket);
    }

}
