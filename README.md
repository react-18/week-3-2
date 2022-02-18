# 📗&nbsp;&nbsp;원티드 프리온보딩 6번째 과제 - 검색창 구현

<br />

## 🚀&nbsp;&nbsp;배포 주소
👉 [배포링크 바로가기](https://search-nutrients.vercel.app/)

<br />


## 👩&nbsp;&nbsp;팀원소개 및 담당업무
|   이가윤     |      신혜리   |     한재성    |     이선재    |
| :----------: | :----------: | :----------: | :----------: |
|<img src="https://avatars.githubusercontent.com/u/67543454?v=4" width=100 alt="_"/>| <img src="https://avatars.githubusercontent.com/u/72786354?v=4" width=100 alt="_"/> |<img src="https://avatars.githubusercontent.com/u/57760806?v=4" width=100 alt="_"/> | <img src="https://avatars.githubusercontent.com/u/63578094?v=4" width=100 alt="_"/>|
|  결과창 UI | 검색창 UI | 브랜드버튼 UI | 검색 아이템 UI |
| [Github](https://github.com/Gayun00) |[Github](https://github.com/rachel490) |[Github](https://github.com/Han-D-Peter) |[Github](https://github.com/Sunjae95)|


<br />

## 🎮&nbsp;&nbsp;사용한 기술 스택
- next.js
- typescript
- styled-component
- redux-toolkit

<br />


## 🙋🏻&nbsp;&nbsp;구현 기능
- mockdata를 Next.js api에 저장하여 fetching 구현
- 검색어 입력
  - 한글 초성,중성,종성이 입력될 때 검색구현 (라이브러리 이용)
  - 영문 입력될 때 대소문자 구분없이 검색구현
  - 공백 들어오거나 공백만 검색어에 남을 때 예외처리 
- 정렬순서 : 
  - 사전순 정렬
  - 제품,브랜드를 모두 보여주되 구분하기 위하여 UI 분리
- 검색결과 : 
  - 브랜드 : overflow시 옆으로 스크롤
  - 제품 : overflow시 위아래 스크롤
- 성능최적화 : data fetching, data 순회를 최소화하려고 노력
  - 처음 검색어를 입력시 mockdata에서 filter
  - 추후 검색어를 입력시 filter된 배열을 리덕스 state에 저장해서 reducer로 다시 filter
  - 삭제시 mockdata에서 filter

<br />

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/72786354/154731569-20bdcbcc-9f85-4c15-86cf-a0633ebcbbdf.gif)

<br />

## 🌟&nbsp;&nbsp;리덕스 구조
- mockdata : 처음에 데이터 통신을 통해 초기값 할당
- brandList : mockdata에 값이 들어온 뒤 브랜드만 중복없이 추출하여 저장
- filterList :
  - products : 검색어에 따라 필터된 제품 리스트 저장, 후에 검색결과가 출력될 때를 대비하여 둘의 의존성을 유지하기 위해 mockdata와 같은 객체구조 유지
  - brands : 검색어에 따라 brandList에서 필터된 브랜드들을 string 배열로 저장

<br />
 
```jsx
const initialState = {
  mockdata: [] as searchInfo[],
  brandList: [] as string[],
  filterList: {
    products: [] as searchInfo[],
    brands: [] as string[],
  }

interface searchInfo {
  제품명: string;
  브랜드: string;
}
```


<br />


## 🧗‍&nbsp;&nbsp;프로젝트 과정 소개
### 진행 방식

- 공통 진행
    - 초기세팅 : Next.js 초기세팅 및 Prettier, ESLint 설정
    - Next.js api 이용해서 mockData 추가
    - Redux Toolkit을 이용해서 검색어 필터 reducer, action 정의 및 state 구조 정의
    - 전체적인 style 수정 (통일성)
    - VsCode Liveshare를 활용해 페어프로그래밍 진행
  
- 개별 업무 분담 : UI 구현
    - [한재성] 브랜드 버튼 UI
    - [신혜리] 검색창 UI
    - [이선재] 결과아이템 UI
    - [이가윤] 결과창 UI



 
<br />

### 협업 툴

- Notion: 팀 아이디어 회의 및 정리 
    👉 [노션 링크](https://www.notion.so/3-2-61a01f45858d4e82ab07f5ae38bb4ef2) 
- Figma: UI 구현
    👉 [피그마 링크](https://www.figma.com/file/Q9dD1xPp0UHYdKvx8feNJF/Untitled?node-id=0%3A1) 
- Discord, Vsc Liveshare: 실시간 소통 및 페어프로그래밍

<img width="459" alt="Screen Shot 2022-02-19 at 1 02 06 AM" src="https://user-images.githubusercontent.com/72786354/154717822-7dd52a3b-1bd3-4858-87b9-ff21ac068319.png">


   
<br />


### Git 커밋 컨벤션

> Option: 내용(상세 내용)
> 
- Feat - 새로운 기능 추가
- Fix - 버그 수정
- Docs - 제품 코드 수정 없음
- Style - 코드 형식, 정렬, 주석 등의 변경
- Refactor - 코드 리팩토링
- Test - 테스트 코드 추가
- Chore - 환경설정, 빌드 업무, 패키지 매니저 설정등..

<br />


## 📘 기타 사항

### 디렉토리 구조
```jsx
├── pages
│   ├── _app.tsx
│   ├── api
│   │   └── mockData.ts
│   └── index.tsx
├── components
│		├── ResultView
│   ├── BrandBtn
│   │   └── index.tsx
│   │   └── styled.ts
│   ├── ProductItem
│   │   └── index.tsx
│   │   └── styled.ts
│   └── index.tsx
│   └── styled.tsx
└── SearchBar
│    ├── index.tsx
│    └── styled.ts
├── public
├── store
│   ├── searchList.ts
│   ├── store.ts
│   └── types.ts
├── styles
│   ├── globalStyle.ts
│   ├── styled.d.ts
│   └── theme.ts
└── tsconfig.json
```

<br />


## ⚙&nbsp;&nbsp;프로젝트 설치 및 시작

### 프로젝트 클론

> $ git clone []()


### 패키지 설치

> $ npm install

### 서버 실행

> $ npm run dev
