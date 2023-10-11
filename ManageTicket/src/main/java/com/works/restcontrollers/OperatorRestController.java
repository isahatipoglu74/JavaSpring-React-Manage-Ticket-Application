package com.works.restcontrollers;

import com.works.models.Admin;
import com.works.models.Operator;
import com.works.models.User;
import com.works.services.AdminService;
import com.works.services.OperatorService;
import com.works.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/operator")
public class OperatorRestController {

    final OperatorService operatorService;

    // Bu metot, kullanıcıdan gelen email ve password bilgilerini alır ve adminsService ile karşılaştırır.
// Eğer eşleşme varsa, true döner. Yoksa, false döner.
    @PostMapping("/login")
    public ResponseEntity<Operator> login(@RequestBody Operator operator) {
        return operatorService.login(operator);
    }


    @PostMapping("/register")
    public ResponseEntity<Operator> register(@RequestBody Operator operator) {
        return operatorService.register(operator);
    }

    @GetMapping("/detail/{oid}")
    public ResponseEntity detail(@PathVariable Long oid) {
        return operatorService.detail(oid);
    }

    @GetMapping("/list")
    public ResponseEntity list(){
        return operatorService.list();
    }
}
