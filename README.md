<h1 align='center'>원티드 프리온보딩 프론트엔드 사전과제</h1>

## 📖 목차

<ol>
    <li>
        <a href='#overview'>Overview</a>
    </li>
    <li>
        <a href='#run'>환경설정 및 실행</a>
    </li>
    <li>
        <a href='#features'>요구사항</a>
    </li>
    <li>
        <a href='#library'>라이브러리</a>
    </li>
    <li>
        <a href='#structure'>폴더 구조</a>
    </li>
    <li>
        <a href='#agonize'>고민한 부분</a>
    </li>
    <li>
        <a href='#improve'>개선사항</a>
    </li>
    
</ol>


<h2 id='overview'>Overview</h2>
<video src='https://user-images.githubusercontent.com/57670160/214036194-ff9b92d6-5226-429a-b024-5f6a5653825d.mov'></video>

<h2 id='run'>환경설정 및 실행</h2>

Backend
<pre>
    git clone https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api.git
    
    npm run start
</pre>

Frontend
<pre>
    git clone https://github.com/mingyeongho/wanted-pre-onboarding-challenge-fe-1.git
    
    루트 디렉토리에 .env 파일 생성
    
    .env 파일에 VITE_API_URL=http://localhost:8080 추가
    
    npm run dev
</pre>

<h2 id='features'>요구사항</h2>
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
  - [ ] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

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


<h2 id='library'>라이브러리</h2>
<img width="344" alt="image" src="https://user-images.githubusercontent.com/57670160/214060689-7d56173f-19fe-4eae-b1c5-9462ec682831.png">

<h2 id='structure'>폴더 구조</h2>
<pre>
src
├── App.tsx
├── apis
│   └── apis.ts
├── components
│   ├── Auth
│   │   ├── Auth.tsx
│   │   ├── hooks
│   │   │   └── useAuth.ts
│   │   ├── props.ts
│   │   └── style.ts
│   ├── Header
│   │   ├── Header.tsx
│   │   └── style.ts
│   ├── Reusable
│   │   ├── Button
│   │   │   ├── Button.tsx
│   │   │   └── style.ts
│   │   ├── Input
│   │   │   ├── Input.tsx
│   │   │   └── style.ts
│   │   ├── Separate
│   │   │   └── Separate.tsx
│   │   ├── ShadowBox
│   │   │   ├── ShadowBox.tsx
│   │   │   └── style.ts
│   │   └── Textarea
│   │       ├── Textarea.style.tsx
│   │       └── Textarea.tsx
│   ├── Signup
│   │   ├── Signup.tsx
│   │   ├── hooks
│   │   │   └── useSignup.ts
│   │   ├── props.ts
│   │   └── style.ts
│   └── Todo
│       ├── CreateTodo
│       │   ├── CreateTodo.style.tsx
│       │   ├── CreateTodo.tsx
│       │   └── hooks
│       │       └── useCreate.ts
│       ├── DefaultTodo
│       │   ├── DefaultTodo.style.tsx
│       │   └── DefaultTodo.tsx
│       ├── DetailTodo
│       │   ├── DetailTodo.style.tsx
│       │   ├── DetailTodo.tsx
│       │   └── hooks
│       │       └── useFetchTodoItem.ts
│       ├── Todo.style.tsx
│       ├── Todo.tsx
│       ├── TodoDetail
│       │   ├── TodoDetail.style.tsx
│       │   └── TodoDetail.tsx
│       ├── TodoItem
│       │   ├── TodoItem.style.tsx
│       │   ├── TodoItem.tsx
│       │   └── hooks
│       │       └── useRemove.ts
│       ├── TodoList
│       │   ├── TodoList.style.tsx
│       │   ├── TodoList.tsx
│       │   └── hooks
│       │       └── useFetchTodoList.ts
│       ├── TodoListContainer
│       │   ├── TodoListContainer.style.tsx
│       │   └── TodoListContainer.tsx
│       └── UpdateTodo
│           ├── UpdateTodo.style.tsx
│           ├── UpdateTodo.tsx
│           └── hooks
│               └── useUpdate.ts
├── main.tsx
├── pages
│   ├── AuthPage.tsx
│   ├── Home.tsx
│   └── SignupPage.tsx
├── router
│   └── Router.tsx
├── styles
│   ├── GlobalStyle.ts
│   └── Palette.ts
├── utils
│   ├── constants.ts
│   ├── function
│   │   ├── isEmailValid.ts
│   │   ├── isPasswordValid.ts
│   │   ├── isValid.ts
│   │   └── timeDiff.ts
│   ├── interface.ts
│   ├── token.ts
│   └── type.ts
└── vite-env.d.ts</pre>

<h2 id='agonize'>고민한 부분</h2>
a

<h2 id='improve'>개선사항</h2>
a
