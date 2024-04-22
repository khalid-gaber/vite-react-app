import Header from "./Header";
import Footer from "./Footer";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
        <header><Header /></header>
        <main>{children}</main>
        <footer><Footer /></footer>
        </>
    )
}