package com.works.models;

import lombok.Data;
import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.time.LocalDateTime;

@Entity
@Data
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long tid; //ticket id

    private String requester; //talep eden kişi

    private String statusType; //ticket durumu

    private String tickedType; //ticket türü

    private String solutionProvider; //çözüm sağlayan kişi

    private String subject; //konu

    private LocalDateTime createDate; //oluşturulma zamanı otomatik oluşmasını istiyorum
    @PrePersist
    protected void onCreate() {
        createDate = LocalDateTime.now();
    }

    private Date resolutionDate; //çözülme zamanı

    private String category; //ticket kategori

    private String departmantManager;//ilgili departman yöneticisi

    private String description; //ticket ile ilgili detaylı açıklama

    @OneToMany
    private List<Operator> operator;

    @OneToOne
    private User user;

}
