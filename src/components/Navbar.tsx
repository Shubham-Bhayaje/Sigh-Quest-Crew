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
        <Link href="/about">
          <MenuItem setActive={setActive} active={active} item="About" />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink
              href="https://www.instagram.com/sigh_questcrew?utm_source=qr&igsh=eG1qMm92OGhpczBz"
              className="flex-row items-center justify-center"
            >
              Instagram
            </HoveredLink>
            <HoveredLink href="https://x.com/SighQuestcrew">
              Tweeter
            </HoveredLink>
            <HoveredLink href="/contact">Email</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/projects">
          <MenuItem setActive={setActive} active={active} item="Projects" />
        </Link>

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services">Web Development</HoveredLink>
            <HoveredLink href="/services">Android Development</HoveredLink>
            <HoveredLink href="/services">Machine learning</HoveredLink>
            <HoveredLink href="/services">Documentation Management</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
