import React, {
  FC,
  ReactEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';

interface IAudioPlayer {
  isPlay?: boolean;
  src: string;
  loop?: boolean;
  onEnded?: ReactEventHandler<HTMLAudioElement> | undefined;
}
const AudioPlayer: FC<IAudioPlayer> = props => {
  const { isPlay = false, src, loop = false, onEnded } = props;
  const audioRef = useRef<any>();

  useEffect(() => {
    if (isPlay) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlay]);

  return <audio ref={audioRef} src={src} loop={loop} onEnded={onEnded} />;
};

export default AudioPlayer;

export const useAudio = (
  url: string,
): { playing: boolean; toggle: () => void } => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(s => !s);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return { playing, toggle };
};
