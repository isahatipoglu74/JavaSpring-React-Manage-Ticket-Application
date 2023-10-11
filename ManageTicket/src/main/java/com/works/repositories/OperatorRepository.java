package com.works.repositories;

import com.works.models.Operator;
import com.works.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OperatorRepository extends JpaRepository<Operator, Long> {

    Optional<Operator> findByEmailEqualsIgnoreCaseAndPasswordEquals(String email, String password);
}