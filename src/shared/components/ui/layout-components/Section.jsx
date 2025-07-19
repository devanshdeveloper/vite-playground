import { cn } from "@heroui/theme"

function Section({ children, className = "", ...props }) {
    return (
        <section className={
            cn(`w-screen h-screen flex items-center justify-center  bg-gray-100 p-4`, className)
        } {...props}> {children}</section>
    )
}

export default Section