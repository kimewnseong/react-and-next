import Link from 'next/link';

export default function Home() {
  return (
    <div>
      Home
      <div>
        <Link href={'/search'}>이동</Link>
      </div>
    </div>
  );
}
