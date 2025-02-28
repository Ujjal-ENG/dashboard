"use client";

const ProfileIcon = () => {
  return (
    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      {/* Blue border with glow effect */}
      <div className="absolute inset-0 rounded-full border-2 border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

      {/* User icon in center */}
      <svg
        className="w-28 h-12 text-gray-300 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    </div>
  );
};

export default ProfileIcon;
