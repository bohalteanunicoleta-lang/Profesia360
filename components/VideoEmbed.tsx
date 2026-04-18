"use client";

import { useEffect, useRef, useState } from "react";

interface VideoEmbedProps {
  url: string;
  titlu?: string;
}

function parseVideoUrl(url: string): string | null {
  if (!url) return null;

  // YouTube: watch?v=, youtu.be/, /embed/
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytMatch) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?rel=0&modestbranding=1`;
  }

  // Vimeo: vimeo.com/ID or player.vimeo.com/video/ID
  const vimeoMatch = url.match(
    /(?:vimeo\.com\/(?:video\/)?|player\.vimeo\.com\/video\/)(\d+)/
  );
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?dnt=1`;
  }

  return null;
}

export default function VideoEmbed({ url, titlu = "Video" }: VideoEmbedProps) {
  const embedUrl = parseVideoUrl(url);
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!embedUrl) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [embedUrl]);

  if (!embedUrl) {
    return (
      <div className="aspect-video bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-primary-200">
        <div className="text-center text-primary-400">
          <div className="text-5xl mb-3">▶</div>
          <p className="text-sm font-medium">Adaugă un URL YouTube sau Vimeo</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-gray-900"
    >
      {visible ? (
        <iframe
          src={embedUrl}
          title={titlu}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
