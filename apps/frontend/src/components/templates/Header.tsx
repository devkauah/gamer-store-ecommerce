import Logo from "../shared/Logo";


export default function Header() {

    return (
        <header
            className="
                flex  items-center py-6 px-5
                bg-green-600
            "
        >
            <Logo />
        </header>
    )
};