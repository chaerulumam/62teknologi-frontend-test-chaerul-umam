import React from "react";

export function SkeletonDetail({ isLoading, count, style }) {
  if (!isLoading) return null;

  return (
    <div className="p-6 flex items-start mt-4">
      <div className="w-40 h-40 mr-6 animate-skeletonLoading"></div>
      <div className="flex flex-col">
        <div className="w-60 h-2 mb-2 animate-skeletonLoading"></div>
        <div className="w-80 h-1 mb-2 animate-skeletonLoading"></div>
        <div className="w-80 h-1 animate-skeletonLoading"></div>
      </div>
    </div>
  );
}

export function SkeletonReviews({ isLoading, count, style }) {
  if (!isLoading) return null;

  return (
    <div className="flex items-start mb-4">
      <div className="w-12 h-12 rounded-full mr-2 animate-skeletonLoading"></div>
      <div className="flex flex-col">
        <div className="w-48 h-1 mb-2 animate-skeletonLoading"></div>
        <div className="w-36 h-1 mb-2 animate-skeletonLoading"></div>
        <div className="w-120 h-1 animate-skeletonLoading"></div>
      </div>
    </div>
  );
}
