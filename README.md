# ๐&nbsp;&nbsp;์ํฐ๋ ํ๋ฆฌ์จ๋ณด๋ฉ 6๋ฒ์งธ ๊ณผ์  - ๊ฒ์์ฐฝ ๊ตฌํ

<br />

## ๐&nbsp;&nbsp;๋ฐฐํฌ ์ฃผ์
๐ [๋ฐฐํฌ๋งํฌ ๋ฐ๋ก๊ฐ๊ธฐ](https://search-nutrients.vercel.app/)

<br />


## ๐ฉ&nbsp;&nbsp;ํ์์๊ฐ ๋ฐ ๋ด๋น์๋ฌด
|   ์ด๊ฐ์ค     |      ์ ํ๋ฆฌ   |     ํ์ฌ์ฑ    |     ์ด์ ์ฌ    |
| :----------: | :----------: | :----------: | :----------: |
|<img src="https://avatars.githubusercontent.com/u/67543454?v=4" width=100 alt="_"/>| <img src="https://avatars.githubusercontent.com/u/72786354?v=4" width=100 alt="_"/> |<img src="https://avatars.githubusercontent.com/u/57760806?v=4" width=100 alt="_"/> | <img src="https://avatars.githubusercontent.com/u/63578094?v=4" width=100 alt="_"/>|
|  ๊ฒฐ๊ณผ์ฐฝ UI | ๊ฒ์์ฐฝ UI | ๋ธ๋๋๋ฒํผ UI | ๊ฒ์ ์์ดํ UI |
| [Github](https://github.com/Gayun00) |[Github](https://github.com/rachel490) |[Github](https://github.com/Han-D-Peter) |[Github](https://github.com/Sunjae95)|


<br />

## ๐ฎ&nbsp;&nbsp;์ฌ์ฉํ ๊ธฐ์  ์คํ
- next.js
- typescript
- styled-component
- redux-toolkit

<br />


## ๐๐ป&nbsp;&nbsp;๊ตฌํ ๊ธฐ๋ฅ
- mockdata๋ฅผ Next.js api์ ์ ์ฅํ์ฌ fetching ๊ตฌํ
- ๊ฒ์์ด ์๋ ฅ
  - ํ๊ธ ์ด์ฑ,์ค์ฑ,์ข์ฑ์ด ์๋ ฅ๋  ๋ ๊ฒ์๊ตฌํ (๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ด์ฉ)
  - ์๋ฌธ ์๋ ฅ๋  ๋ ๋์๋ฌธ์ ๊ตฌ๋ถ์์ด ๊ฒ์๊ตฌํ
  - ๊ณต๋ฐฑ ๋ค์ด์ค๊ฑฐ๋ ๊ณต๋ฐฑ๋ง ๊ฒ์์ด์ ๋จ์ ๋ ์์ธ์ฒ๋ฆฌ 
- ์ ๋ ฌ์์ : 
  - ์ฌ์ ์ ์ ๋ ฌ
  - ์ ํ,๋ธ๋๋๋ฅผ ๋ชจ๋ ๋ณด์ฌ์ฃผ๋ ๊ตฌ๋ถํ๊ธฐ ์ํ์ฌ UI ๋ถ๋ฆฌ
- ๊ฒ์๊ฒฐ๊ณผ : 
  - ๋ธ๋๋ : overflow์ ์์ผ๋ก ์คํฌ๋กค
  - ์ ํ : overflow์ ์์๋ ์คํฌ๋กค
- ์ฑ๋ฅ์ต์ ํ : data fetching, data ์ํ๋ฅผ ์ต์ํํ๋ ค๊ณ  ๋ธ๋ ฅ
  - ์ฒ์ ๊ฒ์์ด๋ฅผ ์๋ ฅ์ mockdata์์ filter
  - ์ถํ ๊ฒ์์ด๋ฅผ ์๋ ฅ์ filter๋ ๋ฐฐ์ด์ ๋ฆฌ๋์ค state์ ์ ์ฅํด์ reducer๋ก ๋ค์ filter
  - ์ญ์ ์ mockdata์์ filter

<br />

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/72786354/154731569-20bdcbcc-9f85-4c15-86cf-a0633ebcbbdf.gif)

<br />

## ๐&nbsp;&nbsp;๋ฆฌ๋์ค ๊ตฌ์กฐ
- mockdata : ์ฒ์์ ๋ฐ์ดํฐ ํต์ ์ ํตํด ์ด๊ธฐ๊ฐ ํ ๋น
- brandList : mockdata์ ๊ฐ์ด ๋ค์ด์จ ๋ค ๋ธ๋๋๋ง ์ค๋ณต์์ด ์ถ์ถํ์ฌ ์ ์ฅ
- filterList :
  - products : ๊ฒ์์ด์ ๋ฐ๋ผ ํํฐ๋ ์ ํ ๋ฆฌ์คํธ ์ ์ฅ, ํ์ ๊ฒ์๊ฒฐ๊ณผ๊ฐ ์ถ๋ ฅ๋  ๋๋ฅผ ๋๋นํ์ฌ ๋์ ์์กด์ฑ์ ์ ์งํ๊ธฐ ์ํด mockdata์ ๊ฐ์ ๊ฐ์ฒด๊ตฌ์กฐ ์ ์ง
  - brands : ๊ฒ์์ด์ ๋ฐ๋ผ brandList์์ ํํฐ๋ ๋ธ๋๋๋ค์ string ๋ฐฐ์ด๋ก ์ ์ฅ

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
  ์ ํ๋ช: string;
  ๋ธ๋๋: string;
}
```


<br />


## ๐งโ&nbsp;&nbsp;ํ๋ก์ ํธ ๊ณผ์  ์๊ฐ
### ์งํ ๋ฐฉ์

- ๊ณตํต ์งํ
    - ์ด๊ธฐ์ธํ : Next.js ์ด๊ธฐ์ธํ ๋ฐ Prettier, ESLint ์ค์ 
    - Next.js api ์ด์ฉํด์ mockData ์ถ๊ฐ
    - Redux Toolkit์ ์ด์ฉํด์ ๊ฒ์์ด ํํฐ reducer, action ์ ์ ๋ฐ state ๊ตฌ์กฐ ์ ์
    - ์ ์ฒด์ ์ธ style ์์  (ํต์ผ์ฑ)
    - VsCode Liveshare๋ฅผ ํ์ฉํด ํ์ดํ๋ก๊ทธ๋๋ฐ ์งํ
  
- ๊ฐ๋ณ ์๋ฌด ๋ถ๋ด : UI ๊ตฌํ
    - [ํ์ฌ์ฑ] ๋ธ๋๋ ๋ฒํผ UI
    - [์ ํ๋ฆฌ] ๊ฒ์์ฐฝ UI
    - [์ด์ ์ฌ] ๊ฒฐ๊ณผ์์ดํ UI
    - [์ด๊ฐ์ค] ๊ฒฐ๊ณผ์ฐฝ UI



 
<br />

### ํ์ ํด

- Notion: ํ ์์ด๋์ด ํ์ ๋ฐ ์ ๋ฆฌ 
    ๐ [๋ธ์ ๋งํฌ](https://www.notion.so/3-2-61a01f45858d4e82ab07f5ae38bb4ef2) 
- Figma: UI ๊ตฌํ
    ๐ [ํผ๊ทธ๋ง ๋งํฌ](https://www.figma.com/file/Q9dD1xPp0UHYdKvx8feNJF/Untitled?node-id=0%3A1) 
- Discord, Vsc Liveshare: ์ค์๊ฐ ์ํต ๋ฐ ํ์ดํ๋ก๊ทธ๋๋ฐ

<img width="459" alt="Screen Shot 2022-02-19 at 1 02 06 AM" src="https://user-images.githubusercontent.com/72786354/154717822-7dd52a3b-1bd3-4858-87b9-ff21ac068319.png">


   
<br />


### Git ์ปค๋ฐ ์ปจ๋ฒค์

> Option: ๋ด์ฉ(์์ธ ๋ด์ฉ)
> 
- Feat - ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ
- Fix - ๋ฒ๊ทธ ์์ 
- Docs - ์ ํ ์ฝ๋ ์์  ์์
- Style - ์ฝ๋ ํ์, ์ ๋ ฌ, ์ฃผ์ ๋ฑ์ ๋ณ๊ฒฝ
- Refactor - ์ฝ๋ ๋ฆฌํฉํ ๋ง
- Test - ํ์คํธ ์ฝ๋ ์ถ๊ฐ
- Chore - ํ๊ฒฝ์ค์ , ๋น๋ ์๋ฌด, ํจํค์ง ๋งค๋์  ์ค์ ๋ฑ..

<br />


## ๐ย ๊ธฐํ ์ฌํญ

### ๋๋ ํ ๋ฆฌ ๊ตฌ์กฐ
```jsx
โโโ pages
โย ย  โโโ _app.tsx
โย ย  โโโ api
โย ย  โย ย  โโโ mockData.ts
โย ย  โโโ index.tsx
โโโ components
โ		โโโ ResultView
โย ย  โโโ BrandBtn
โย ย  โย ย  โโโ index.tsx
โย ย  โย ย  โโโ styled.ts
โย ย  โโโ ProductItem
โย ย  โย ย  โโโ index.tsx
โย ย  โย ย  โโโ styled.ts
โย ย  โโโ index.tsx
โย ย  โโโ styled.tsx
โโโ SearchBar
โ    โโโ index.tsx
โ    โโโ styled.ts
โโโ public
โโโ store
โย ย  โโโ searchList.ts
โย ย  โโโ store.ts
โย ย  โโโ types.ts
โโโ styles
โย ย  โโโ globalStyle.ts
โย ย  โโโ styled.d.ts
โย ย  โโโ theme.ts
โโโ tsconfig.json
```

<br />


## โ&nbsp;&nbsp;ํ๋ก์ ํธ ์ค์น ๋ฐ ์์

### ํ๋ก์ ํธ ํด๋ก 

> $ git clone []()


### ํจํค์ง ์ค์น

> $ npm install

### ์๋ฒ ์คํ

> $ npm run dev
