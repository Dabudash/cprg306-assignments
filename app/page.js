import Link from "next/link"
import StudentInfo from "./StudentInfo"

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: WEB DEVELOPMENT 2 - ASSIGNMENTS</h1>
     <br></br>
      <StudentInfo />
      <br></br>
      <nav>
        <Link href="/week2"> week2
        </Link>
        <p></p>
        <Link href="/week3"> week3
        </Link>
        <p></p>
        <Link href="/week4"> week4
        </Link>
        <p></p>
        <Link href="/week5"> week5
        </Link>
        <p></p>
        <Link href="/week6"> week6
        </Link>
        <p></p>
        <Link href="/week7"> week7
        </Link>
        <p></p>
        <Link href="/week8"> week8
        </Link>
        <p></p>
      
      </nav>
    </main>
  );

}
