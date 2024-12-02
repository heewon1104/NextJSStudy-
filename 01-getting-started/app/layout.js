import './globals.css';

// 레이아웃이란? 각 페이지의 뼈대를 잡아주는 역할
// page와 마찬가지로 각 디렉토리마다 하나의 피일이 존재해야 함

// NextJS에서는 Header를 metadata라는 특별한 객체를 사용하여 페이지 이름과 설명을 설정 가능함
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

// children은 현재 활성화 된 page.js를 가리킴
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
