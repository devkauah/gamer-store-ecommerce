import { ReactNode } from "react"
import Footer from "./Footer";
import Header from "./Header";


export interface PageProps {
    children?:ReactNode;
    className?:string;
};

export default function Page(props:PageProps) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className={`bg-blue-600 flex flex-1${props.className ?? ''}`}>
                <h1>Página</h1>
                { props.children }
            </main>
            <Footer />
        </div>
    );
}