import { auth, signOut } from "@/auth";


export default async function SettingPage () {
    const session = await auth();
    return (
        <div className="text-3xl">
            {JSON.stringify(session)}
            <form action={async () => {
                "use server";
                await signOut();
            }}>
                <button type="submit">sign out</button>
            </form>
        </div>
    );
}