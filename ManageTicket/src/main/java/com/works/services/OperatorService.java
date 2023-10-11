package com.works.services;

import com.works.configs.Rest;
import com.works.models.Operator;
import com.works.models.User;
import com.works.repositories.OperatorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.net.http.HttpRequest;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OperatorService {

    final HttpServletRequest req;
    final OperatorRepository operatorRepository;

    public ResponseEntity<Operator> login(Operator operator){
        Optional<Operator> optionalOperator=operatorRepository.findByEmailEqualsIgnoreCaseAndPasswordEquals(operator.getEmail(), operator.getPassword());
    if(optionalOperator.isPresent()){
        req.getSession().setAttribute("operator",optionalOperator.get().getEmail());
        return ResponseEntity.ok(optionalOperator.get());
    }else {
        return ResponseEntity.badRequest().build();
    }
    }
    public ResponseEntity register(Operator operator){
        try {
            operatorRepository.save(operator);
            Rest rest=new Rest(true,operator);
            return new ResponseEntity(rest, HttpStatus.OK);
        }catch (Exception ex){
            Rest rest=new Rest(false,ex.getMessage());
            return new ResponseEntity(rest,HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity detail(Long oid){
        try {
            Optional<Operator> opt=operatorRepository.findById(oid);
            if(opt.isPresent()){
                Operator o=opt.get();
                Rest rest=new Rest(true,o);
                return new ResponseEntity(rest, HttpStatus.OK);
            }else {
                throw new Exception("Operator Not Found");
            }
        }catch (Exception ex){
            Rest rest=new Rest(false,ex.getMessage());
            return new ResponseEntity(rest,HttpStatus.BAD_REQUEST);
        }
    }
    public ResponseEntity list(){
        List<Operator> ls=operatorRepository.findAll();
        Rest rest=new Rest(true,ls);
        return new ResponseEntity(rest,HttpStatus.OK);
    }

}
