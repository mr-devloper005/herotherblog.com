"use client";

import { useState, useEffect } from "react";

interface PdfViewerProps {
  fileUrl: string;
  title: string;
}

export function PdfViewer({ fileUrl, title }: PdfViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [viewerUrl, setViewerUrl] = useState("");

  useEffect(() => {
    // Try direct PDF URL first
    setViewerUrl(fileUrl);
    setIsLoading(false);
  }, [fileUrl]);

  return (
    <div className="w-full" style={{ height: "calc(100vh - 200px)", minHeight: "600px" }}>
      {isLoading && (
        <div className="flex h-full flex-col items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-violet-200 border-t-violet-600 mb-3"></div>
          <p className="text-sm text-slate-500">Loading PDF...</p>
        </div>
      )}

      {!isLoading && viewerUrl && (
        <iframe
          src={viewerUrl}
          title={title}
          className="w-full h-full border-0"
          allowFullScreen
        />
      )}
    </div>
  );
}
