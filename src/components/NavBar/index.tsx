import Link from "next/link";
import {useRouter} from "next/router";

export default function NavBar(){
    const router = useRouter();
    const navigation = [
        {href: 'home', name: "Home"},
        {href: 'about', name: "About"},
        {href: `contact/${encodeURIComponent("4")}`, name: "Contact Information"}
    ]
    return (
        <div>
            {navigation.map((item, index) =>
                <li key={index}><Link href={item.href}>{item.name}</Link></li>)}
        </div>
    )
}