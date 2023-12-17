import Link from 'next/link';

export default function StudentInfo() {
  return (
    <>
      <div>
        <h2>Name: Justine Barredo </h2>
        <p>Course: CPRG 306 </p>
        <p>Github: <Link href={"https://github.com/Dabudash"} className='underline'>https://github.com/Dabudash</Link></p>
      </div>
    </>
  );
}