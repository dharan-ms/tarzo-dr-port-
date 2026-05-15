import { useCallback, useEffect, useRef, useState } from "react";
import { Music, Volume2 } from "lucide-react";
import { BACKGROUND_MUSIC_URL } from "../data/assets";
import {
  heroCircleButtonClass,
  heroCircleButtonStyle,
  heroCircleIconClass,
} from "./heroButtonStyles";

type MusicButtonProps = {
  className?: string;
};

export function MusicButton({ className = "" }: MusicButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(BACKGROUND_MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, [isPlaying]);

  return (
    <button
      type="button"
      onClick={toggle}
      className={`${heroCircleButtonClass} ${className}`.trim()}
      style={heroCircleButtonStyle}
      aria-label={isPlaying ? "Pause background music" : "Play background music"}
      title={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? (
        <Volume2 className={heroCircleIconClass} aria-hidden />
      ) : (
        <Music className={heroCircleIconClass} aria-hidden />
      )}
    </button>
  );
}
