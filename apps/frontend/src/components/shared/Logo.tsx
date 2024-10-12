import Link from "next/link";
import Image from "next/image"

export default function Logo() {
    return (    
        <Link href="/">
            <Image 
                src="/logo.png"
                width={60}
                height={60}
                alt="logo"
            />
            <Image 
                src="/text-logo.png"
                width={230}
                height={0}
                alt="logo"
            />
        </Link>
    );
};