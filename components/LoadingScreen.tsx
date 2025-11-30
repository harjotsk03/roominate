// components/LoadingScreen.tsx
"use client";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center w-screen h-screen top-0 overflow-hidden left-0 justify-center bg-white">
      <div className="w-64 h-1 bg-gray-200 overflow-hidden rounded-full">
        <div className="h-full w-full bg-black animate-loading-bar" />
      </div>
    </div>
  );
}
