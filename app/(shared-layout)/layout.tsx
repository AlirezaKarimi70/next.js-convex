import NavBar from "@/components/web/nav";
import { ReactNode } from "react";

export default function SharedLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
}