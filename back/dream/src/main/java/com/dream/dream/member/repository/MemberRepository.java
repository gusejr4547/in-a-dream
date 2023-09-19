package com.dream.dream.member.repository;

import com.dream.dream.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByEmail(String email);
    Optional<Member> findByEmailAndPassword(String email, String password);
    Optional<Member> findById(Long id);


}