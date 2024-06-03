"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 border-[1px] rounded-full",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink
              href="/Instagram"
              className="flex-row items-center justify-center"
            >
              Instagram
            </HoveredLink>
            <HoveredLink href="/Tweeter">Tweeter</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Projects"
        ></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Web Development">Web Development</HoveredLink>
            <HoveredLink href="/Android Development">
              Android Development
            </HoveredLink>
            <HoveredLink href="/Machine learning">Machine learning</HoveredLink>
            <HoveredLink href="/Documentation Management">
              Documentation Management
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
