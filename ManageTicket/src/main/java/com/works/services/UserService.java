package com.works.services;

import com.works.configs.Rest;
import com.works.models.Admin;
import com.works.models.User;
import com.works.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    final HttpServletRequest req;
    final UserRepository userRepository;

    // Bu metot, veritabanından email ve password bilgilerine göre kullanıcıyı bulur.
    // Eğer bulursa, true döner ve kullanıcıyı session'a kaydeder. Yoksa, false döner.
    public ResponseEntity<User> login(User user) {
        Optional<User> optionalUser = userRepository.findByEmailEqualsIgnoreCaseAndPasswordEquals(user.getEmail(), user.getPassword());
        if (optionalUser.isPresent()) {
            req.getSession().setAttribute("user", optionalUser.get().getEmail());
            return ResponseEntity.ok(optionalUser.get()); // 200 OK durum kodu ve kullanıcı verileri ile cevap döndür
        } else {
            return ResponseEntity.badRequest().build(); // 400 Bad Request durum kodu ile boş bir cevap döndür
        }
    }
    public ResponseEntity register( User user ) {
        try {
            userRepository.save(user);
            Rest rest = new Rest(true, user);
            return new ResponseEntity(rest, HttpStatus.OK);
        }catch (Exception ex ) {
            Rest rest = new Rest(false, ex.getMessage());
            return new ResponseEntity(rest, HttpStatus.BAD_REQUEST);
        }
    }
    public ResponseEntity detail(Long uid){
        try {
            Optional<User> opt=userRepository.findById(uid);
            if(opt.isPresent()){
                User u=opt.get();
                Rest rest=new Rest(true,u);
                return new ResponseEntity(rest, HttpStatus.OK);
            }else {
                throw new Exception("User Not Found");
            }
        }catch (Exception ex){
            Rest rest=new Rest(false,ex.getMessage());
            return new ResponseEntity(rest,HttpStatus.BAD_REQUEST);
        }
    }
    public ResponseEntity list(){
        List<User> ls=userRepository.findAll();
        Rest rest=new Rest(true,ls);
        return new ResponseEntity(rest,HttpStatus.OK);
    }


}
