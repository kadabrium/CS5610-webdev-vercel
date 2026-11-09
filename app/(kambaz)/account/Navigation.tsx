"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? (["profile"] as const)
    : (["signin", "signup"] as const);
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-account-navigation">
      {links.map((link) => (
        <span key={link}>
          <Link href={`/account/${link}`}>
            {link === "signin"
              ? "Signin"
              : link === "signup"
                ? "Signup"
                : "Profile"}
          </Link>
          <br />
        </span>
      ))}
    </div>
  );
}

/*import Link from "next/link";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link href="/account/signin" className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline">
      Signin</Link> <br />

      <Link href="/account/signup" className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline">
      Signup</Link> <br />
      
      <Link href="/account/profile" className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline">
      Profile</Link> <br />
    </div>
  );
}*/