package com.dream.dream.member.controller;

import com.dream.dream.common.BaseResponse;
import com.dream.dream.jwt.JwtTokenProvider;
import com.dream.dream.member.dto.TokenDto;
import com.dream.dream.member.entity.Member;
import com.dream.dream.member.dto.MemberDto;
import com.dream.dream.member.mapper.MemberMapper;
import com.dream.dream.member.repository.MemberRepository;
import com.dream.dream.member.service.MemberService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;

@Tag(name = "회원 API")
@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper memberMapper;
    private final JwtTokenProvider jwtTokenProvider;
    private final MemberRepository memberRepository;

    /**
     * 로그인 (닉네임만 보내주기)
     *
     */
    @Operation(summary = "로그인")
    @PostMapping("/login")
    public BaseResponse login(
            HttpServletResponse response,
            @RequestBody MemberDto.MemberLoginRequestDto requestBody
    ) throws Exception {

        TokenDto tokenDto = memberService.memberLogin(response, requestBody);

        return new BaseResponse(HttpStatus.OK, "로그인 성공", tokenDto);
    }

    /**
     * 회원 가입
     */
    @Operation(summary = "회원가입")
    @PostMapping("/register")
    public BaseResponse register(@RequestBody MemberDto.MemberRegisterRequestDto requestBody){

        Member member =  memberService.memberRegister(requestBody);
        return new BaseResponse(HttpStatus.OK, "회원가입 성공", memberMapper.memberToResponseDto(member));
    }

    /**
     * 이메일 중복 확인
     */
    @Operation(summary = "이메일 검증")
    @GetMapping("/email")
    public BaseResponse emailDoubleCheck(@RequestParam String email){

        boolean isDouble = memberService.emailDoubleCheck(email);

        if(isDouble){
            return new BaseResponse(HttpStatus.OK, "이메일 중복 체크 성공", true);
        }else{
            return new BaseResponse(HttpStatus.OK, "이메일 중복 체크 성공", false);
        }
    }

    /**
     * 닉네임 중복 확인(api 명세서랑 다름)
     */
    @Operation(summary = "닉네임 검증")
    @GetMapping("/nickname")
    public BaseResponse nicknameDoubleCheck(@RequestParam String nickname){

        boolean isDouble = memberService.nicknameDoubleCheck(nickname);

        if(isDouble){
            return new BaseResponse(HttpStatus.OK, "닉네임 중복 체크 성공", true);
        }else{
            return new BaseResponse(HttpStatus.OK, "닉네임 중복 체크 성공", false);
        }
    }

    /**
     * 멤버 정보 확인(api 명세서랑 다름)
     */
    @Operation(summary = "자기 자신 조회")
    @GetMapping
    public BaseResponse getMemberInfo(HttpServletRequest request) throws Exception {
        //////////////////////// 토큰으로 인가된 사용자 정보 처리하는 로직
        String token = jwtTokenProvider.resolveToken(request);
        jwtTokenProvider.validateToken(token);

        System.out.println("token >>> " + token);

        Authentication authentication = jwtTokenProvider.getAuthentication(token);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        Member getMember = memberRepository.findByEmail(userDetails.getUsername()).get();

        // 유저 예외처리 :: 예외처리 커스텀 필요
        if (getMember == null) {
            throw new UserPrincipalNotFoundException("유효한 사용자가 아닙니다.");
        }

        Member member = memberService.memberInfo(getMember.getId());

        return new BaseResponse(HttpStatus.OK, "로그인 성공", memberMapper.memberToResponseDto(member));
    }

    /**
     * 멤버 정보 확인
     */
    @GetMapping("/test")
    public BaseResponse test() {
        return new BaseResponse(HttpStatus.OK, "테스트", "라이따");
    }

}