import ItemList from "./item-list";
import Link from "next/link";
import Header from "./header";

export default function Page(){
    return(
        <main>
            <h1>
                <Header />
            </h1>
            <div>
                <ItemList />
            </div>
        </main>
    );
}