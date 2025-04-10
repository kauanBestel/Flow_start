import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-5  shadow-sm font-work-sans bg-primary-blackl-100 ">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src={"/logo.svg"} alt="logo" width={94} height={30}></Image>
        </Link>

        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href={"/startup/create"}>
                <span>Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Log out</button>
              </form>

              <Link
                className=" flex items-center gap-3"
                href={`/user/${session?.id}`}
              >
                <span className="flex text-center">{session?.user.name}</span>
                <img
                  className="rounded-full"
                  src={session?.user.image}
                  alt="user image"
                  height={40}
                  width={40}
                />
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit">login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
