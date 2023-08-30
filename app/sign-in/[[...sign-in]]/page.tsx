import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="[&>div]:mx-auto">
            <SignIn />
        </div>
    )
}
