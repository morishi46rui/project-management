export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function Project() {
  return (
    <div>
      <h1>プロジェクト個別</h1>
    </div>
  );
}
