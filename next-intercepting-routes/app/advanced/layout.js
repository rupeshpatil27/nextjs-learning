import React from "react";

export default function AdvancedLayout({ children, modal }) {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 border-b pb-2">
        📸 Photo Feed
      </h1>
      <main>{children}</main>

      {modal}
    </div>
  );
}
