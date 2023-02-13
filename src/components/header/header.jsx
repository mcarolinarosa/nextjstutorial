import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <header>
            <div>
                <div className="topNav">
                    <Image
                        src={"/images/CR.png"}
                        width={80}
                        height={50}
                        alt="logo"
                    />
                    <ul>
                        <li>
                            <Link href="/"> Home</Link>
                        </li>
                        <li>
                            <Link href="/events"> Events</Link>
                        </li>
                        <li>
                            <Link href="/about-us"> About us</Link>
                        </li>
                    </ul>
                </div>
                <p className="title">Um site de eventos</p>
            </div>
        </header>
    );
};
