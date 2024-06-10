"use client";

import Image from "next/image";
import React from "react";

import Link from "next/link";
import EmailForm from "./ui/Email";

function Contact() {
  return (
    <div className="w-full h-[100vh] mt-20">
      
      <EmailForm />
    </div>
  );
}

export default Contact;
