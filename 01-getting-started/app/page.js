import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>

      <p>
        {/* 다른 페이지로 이동하기 때문에 단일 페이지 내에서 머물 수 있도록 하는 Link 컴포넌트 사용 필요 */}
        {/* <a href="/about">About US</a> */}
        {/* 페이지를 벗어나지 않음, 페이지를 새로고침 하지 않고 다음 페이지로 이동할 수 있도록 함*/}
        {/* 다음 페이지의 내용이 서버에 랜더링 되고, 클라이언트로 보내져 클라이언트에서 처리 후 화면에 보여줌 */}
        <Link href="/about">About US</Link>
      </p>
    </main>
  );
}
