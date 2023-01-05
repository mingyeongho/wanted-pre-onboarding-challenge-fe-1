# 프리온보딩 사전과제

## 프로젝트 소개

- 회원가입, 로그인, Todo 기능 구현

## Library

- axios
- react-router-dom
- sass

## 실행 화면
1. 로그인이 되어있지 않으면 auth 페이지로 이동합니다.
![image](https://user-images.githubusercontent.com/57670160/210798090-05678a44-b7b3-4edb-a64a-238a25d3928d.png)
![image](https://user-images.githubusercontent.com/57670160/210801444-476bc1fe-b08e-44ac-9537-5ebd2920579d.png)

2. 회원가입, 로그인 페이지
![image](https://user-images.githubusercontent.com/57670160/210801366-3a47df2c-9961-4da6-99d5-f1e0dcfa82e1.png)
![image](https://user-images.githubusercontent.com/57670160/210801636-3b203a1f-b291-4450-a921-cb11e42b1736.png)
![image](https://user-images.githubusercontent.com/57670160/210801748-5565237c-5ee9-4a31-a416-5cc170f41cc0.png)
![image](https://user-images.githubusercontent.com/57670160/210801954-13e72eae-cd04-433c-8113-dea5f6e883a6.png)
![image](https://user-images.githubusercontent.com/57670160/210802151-49c1ade2-e473-4768-bd5a-32787733221f.png)
![image](https://user-images.githubusercontent.com/57670160/210802263-cfeb5e6e-a06f-4e3d-a508-92ea602598c8.png)

3. Todo List
![image](https://user-images.githubusercontent.com/57670160/210802403-df86976b-f7e4-4029-80f3-79c972fb4fcd.png)
![image](https://user-images.githubusercontent.com/57670160/210802631-4e8d74c0-3c1b-45d6-a1fe-1df5456fae01.png)
![image](https://user-images.githubusercontent.com/57670160/210802700-0f6fd460-d296-4a2f-b04c-45e68ffa7be0.png)
![image](https://user-images.githubusercontent.com/57670160/210802761-cf014c4d-147c-418d-95f0-e9deeb87877f.png)
![image](https://user-images.githubusercontent.com/57670160/210802824-d26aec8f-2862-43c0-bc64-addb2cc760ce.png)
![image](https://user-images.githubusercontent.com/57670160/210802919-e58bd5f9-ff95-47e7-88b4-cecb5208418a.png)

## 클라이언트 구현 과제

1. 로그인 / 회원가입

  - /auth 경로에 로그인 / 회원가입 기능을 개발합니다
    - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
    - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

2. Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  - [ ] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

## 과제 참고 사항

1. 로컬 서버를 실행했을 때 생성되는 `db/db.json`이 DB 역할을 하게 됩니다. 해당 파일을 삭제하면 DB는 초기화 됩니다.

2. 로그인 / 회원 가입 기능은 유저를 DB에 추가하고 JWT 토큰을 응답으로 돌려줄 뿐, 실제 유저별로 Todo 목록을 관계 지어 관리하지는 않습니다. (모든 유저가 하나의 Todo를 가짐)

3. [x] 로그아웃은 클라이언트 단에서 localStorage에 저장된 token을 삭제하는 방식으로 간단히 구현해주세요.
