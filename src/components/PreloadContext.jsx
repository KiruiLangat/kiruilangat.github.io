import React, { createContext, useState, useEffect } from 'react';
import MockupVideo from '../assets/videos/MockupVideo.mp4';
import FeedbackVideo from '../assets/videos/FeedbackVideo.mp4';
import CodeVideo from '../assets/videos/CodeVideo.mp4';

export const PreloadContext = createContext();

export const PreloadProvider = ({ children }) => {
  const [videosLoaded, setVideosLoaded] = useState(false);

  useEffect(() => {
    const preloadVideos = async () => {
      const mockupVideo = new Promise((resolve) => {
        const video = document.createElement('video');
        video.src = MockupVideo;
        video.preload = 'metadata';
        video.onloadedmetadata = () => resolve();
      });

      const feedbackVideo = new Promise((resolve) => {
        const video = document.createElement('video');
        video.src = FeedbackVideo;
        video.preload = 'metadata';
        video.onloadedmetadata = () => resolve();
      });

      const codeVideo = new Promise((resolve) => {
        const video = document.createElement('video');
        video.src = CodeVideo;
        video.preload = 'metadata';
        video.onloadedmetadata = () => resolve();
      });

      await Promise.all([mockupVideo, feedbackVideo, codeVideo]);
      setVideosLoaded(true);
    };

    preloadVideos();
  }, []);

  return (
    <PreloadContext.Provider value={{ videosLoaded }}>
      {children}
    </PreloadContext.Provider>
  );
};
