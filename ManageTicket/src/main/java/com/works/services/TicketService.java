package com.works.services;

import com.works.configs.Rest;
import com.works.models.Ticket;
import com.works.repositories.TicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TicketService {

    final TicketRepository ticketRepository;

    //Ticket Create

    public ResponseEntity save(Ticket ticket){
        try {
            ticketRepository.save(ticket);
            Rest rest=new Rest(true,ticket);
            return new ResponseEntity(rest, HttpStatus.OK);
        }catch (Exception ex){
            Rest rest=new Rest(false,ex.getMessage());
            return new ResponseEntity(rest,HttpStatus.BAD_REQUEST);
        }
    }
    public ResponseEntity list(){
        List<Ticket> ls=ticketRepository.findAll();
        Rest rest=new Rest(true,ls);
        return new ResponseEntity(rest, HttpStatus.OK);
    }
    public ResponseEntity list(Long oid){
        List<Ticket> ls=ticketRepository.findByOperator_OidEquals(oid);
        Rest rest=new Rest(true,ls);
        return new ResponseEntity(rest, HttpStatus.OK);
    }

    public ResponseEntity delete(Long tid){
        try {
            ticketRepository.deleteById(tid);
            Rest rest=new Rest(true,"Ticket Deleted");
            return new ResponseEntity(rest,HttpStatus.OK);
        }catch (Exception ex){
            Rest rest=new Rest(false,ex.getMessage());
            return new ResponseEntity(rest,HttpStatus.BAD_REQUEST);
        }
    }
    public ResponseEntity detail(Long tid){
        try {
            Optional<Ticket> opt=ticketRepository.findById(tid);
            if(opt.isPresent()){
                Ticket t=opt.get();
                Rest rest=new Rest(true,t);
                return new ResponseEntity(rest,HttpStatus.OK);
            }else {
                throw new Exception("Ticket Not Found");
            }
        }catch (Exception ex){
            Rest rest=new Rest(false,ex.getMessage());
            return new ResponseEntity(rest,HttpStatus.BAD_REQUEST);
        }
    }
    public ResponseEntity update(Long tid,Ticket ticket){
        try {
            Optional<Ticket> opt=ticketRepository.findById(tid);
            if(opt.isPresent()){
                Ticket t=opt.get();
                t.setSubject(ticket.getSubject());
                t.setSolutionProvider(ticket.getSolutionProvider());
                t.setDepartmantManager(ticket.getDepartmantManager());
                t.setTickedType(ticket.getTickedType());
                t.setStatusType(ticket.getStatusType());
                t.setDescription(ticket.getDescription());
                t.setCreateDate(ticket.getCreateDate());
                ticketRepository.save(t);
                Rest rest=new Rest(true,t);
                return new ResponseEntity(rest,HttpStatus.OK);
            }else {
                throw new Exception("Ticket Not Found");
            }
        }catch (Exception ex){
            Rest rest=new Rest(false,ex.getMessage());
            return  new ResponseEntity(rest,HttpStatus.BAD_REQUEST);
        }
    }
}
