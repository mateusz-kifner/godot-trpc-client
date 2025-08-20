import { IconCircle } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/ui/theme";
import { cn } from "@/lib/utils";
import { auth } from "@/server/auth";

export const triggerStyle = cn(
  navigationMenuTriggerStyle(),
  "bg-stone-950 text-stone-100 hover:bg-stone-800 hover:text-stone-100",
);

async function Navigation() {
  const session = await auth();
  return (
    <div className="fixed top-0 left-0 z-50 h-16 w-full">
      <div className="flex h-full w-full items-center justify-between border-stone-800 border-b bg-stone-900 p-4">
        <div className="flex items-center gap-3">
          <img src="/logo_icon_placeholder_light.png" alt="" className="h-12" />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={triggerStyle}>
                  <Link href="/">Acme</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={triggerStyle}>
                  <Link href="/">Acme2</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {session?.user !== undefined && (
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Admin</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/"
                            className="flex-row items-center gap-2"
                          >
                            <IconCircle />
                            
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/"
                            className="flex-row items-center gap-2"
                          >
                            <IconCircle />
                            
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {/* <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/"
                          className="flex-row items-center gap-2"
                        >
                          <IconCircle />
                          
                        </Link>
                      </NavigationMenuLink>
                    </li> */}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-3">
          <Button className={triggerStyle} asChild>
            <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
              {session ? "Sign out" : "Sign in"}
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
