import Link from "next/link";
import React from "react";

export default function AuthName() {
  return (
    <div className="buy-button">
      <Link href="/login" target="_blank">
        <p className="btn btn-primary py-2 my-0">Iniciar sesion</p>
      </Link>
    </div>
  );
}
