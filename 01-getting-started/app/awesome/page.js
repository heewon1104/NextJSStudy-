// NextJS는 파일 기반 라우팅을 사용
// URL 경로와 프로젝트 내의 파일 구조를 연결
// 발자가 별도의 라우팅 설정 없이도 직관적이고 간단하게 URL을 관리 가능
// 홈 디렉토리에서 /awesome을 입력한다면 아래의 컴포넌트가 화면에 표시됨
export default function AwesomePage() {
  return (
    <main>
      <h1>NextJS Is Awesome</h1>
    </main>
  );
}
