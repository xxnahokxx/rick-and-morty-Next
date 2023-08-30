import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="[&>div]:mx-auto">
            <SignUp />
        </div>
    )
}
