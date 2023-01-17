# 원티드 프리온보딩

### 개요

- 보다 나은 코드를 짜기 위한 공부

---

<details>
    <summary>Stack & Goal</summary>
    <p>

- Objective Stack

  - TS
  - React-Query
  - Styled-Components

- Goal

  - 멋있는 UI, 사용자가 편리하게 사용할 수 있게끔
  - 편리한 구조(너무 많지 않은 컴포넌트와 로직과 뷰의 분리)

  </p>

</details>
<details>
    <summary>
        구현과제
    </summary>
    <p>
    Login / SignUp

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
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

Todo List

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

  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

    </p>

    </details>

<details>
    <summary>First Preview</summary>
    <p>

Auth

- ![Auth](https://user-images.githubusercontent.com/57670160/212594831-9d114bd3-6afd-413b-8803-8fcfe0536928.gif)

Todo

- ![Todo](https://user-images.githubusercontent.com/57670160/212594975-8b4e530d-41fc-4c58-a35e-8c7d12d10275.gif)

Logout

- ![Logout](https://user-images.githubusercontent.com/57670160/212595076-4cd7a378-5029-4afa-b4e0-1ce58298a7f2.gif)

  </p>
</details>
<details>
    <summary>First Refactoring</summary>
    <p>

1.  Validation에서 정규표현식의 사용

- Befor: <img width="558" alt="image" src="https://user-images.githubusercontent.com/57670160/212604258-0e819e87-3015-4c8c-a720-a516b876154f.png">
- After: <img width="511" alt="image" src="https://user-images.githubusercontent.com/57670160/212604387-baedfe51-d7ed-45ce-a621-26107a760e4c.png">

2.  선언형 프로그래밍의 사용

- 내가 무엇을 할지는 드러내고 어떻게 할지는 감추는 방법.
- 같은 목적 or 비슷한 목적을 갖는 코드는 모아두자.
  - 일단 모두 모아두는 것이 아니라 당장 몰라도 되는 디테일만 모아두자.
- 함수는 하나의 일만 한다. (단일 책임)
- 필요한 부분만 노출하자.

</p>
</details>
<details>
    <summary>Second Refactoring</summary>
    <p>
    
React-query 도입
    
  </p>
</details>
<details>
    <summary>실행방법</summary>
    <p>
    
Backend

```
> https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api.git을 클론

yarn

yarn start

```

Frontend

```

> root directory에 .env 파일을 만들고 VITE_API_URL=http://localhost:8080을 적어둔다.

npm i

npm run dev

```

</p>

</details>
