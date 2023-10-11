package com.works.services;

import com.works.configs.Rest;
import com.works.models.Admin;
import com.works.models.Ticket;
import com.works.repositories.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminService {

    final HttpServletRequest req;
    final AdminRepository adminRepository;

    // Bu metot, veritabanından email ve password bilgilerine göre kullanıcıyı bulur.
    // Eğer bulursa, true döner ve kullanıcıyı session'a kaydeder. Yoksa, false döner.
    public ResponseEntity<Admin> login(Admin admin) {
        Optional<Admin> optionalAdmin = adminRepository.findByEmailEqualsIgnoreCaseAndPasswordEquals(admin.getEmail(), admin.getPassword());
        if (optionalAdmin.isPresent()) {
            req.getSession().setAttribute("admin", optionalAdmin.get().getEmail());
            return ResponseEntity.ok(optionalAdmin.get()); // 200 OK durum kodu ve kullanıcı verileri ile cevap döndür
        } else {
            return ResponseEntity.badRequest().build(); // 400 Bad Request durum kodu ile boş bir cevap döndür
        }
    }
    public ResponseEntity detail(Long aid){
        try {
            Optional<Admin> opt=adminRepository.findById(aid);
            if(opt.isPresent()){
                Admin a=opt.get();
                Rest rest=new Rest(true,a);
                return new ResponseEntity(rest, HttpStatus.OK);
            }else {
                throw new Exception("Admin Not Found");
            }
        }catch (Exception ex){
            Rest rest=new Rest(false,ex.getMessage());
            return new ResponseEntity(rest,HttpStatus.BAD_REQUEST);
        }
    }
    public ResponseEntity list(){
        List<Admin> ls=adminRepository.findAll();
        Rest rest=new Rest(true,ls);
        return new ResponseEntity(rest,HttpStatus.OK);
    }
}