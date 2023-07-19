import { useCallback, useEffect, useRef, useState } from 'react';

const SPEAKER_NUMBER = 7;

export const useSpeechFromText = (speakerNumber = SPEAKER_NUMBER) => {
  const synth = useRef<SpeechSynthesis | undefined>();
  const utterance = useRef<SpeechSynthesisUtterance | undefined>();

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const startSpeaking = useCallback(
    (text: string) => {
      setIsFinished(false);
      setIsPaused(false);

      if (typeof window !== 'undefined') {
        synth.current = window.speechSynthesis;
        utterance.current = new SpeechSynthesisUtterance();
        utterance.current.text = text;

        if (synth.current.getVoices().length === 0) {
          const voicesChangedHandler = () => {
            if (synth.current && utterance.current) {
              synth.current.removeEventListener('voiceschanged', voicesChangedHandler);
              utterance.current.voice = synth.current.getVoices()[speakerNumber];
              synth.current.speak(utterance.current);
            }
          };

          synth.current.addEventListener('voiceschanged', voicesChangedHandler);
        } else {
          utterance.current.voice = synth.current.getVoices()[speakerNumber];
          synth.current.speak(utterance.current);
        }

        utterance.current.onend = () => {
          setIsFinished(true);
          setIsSpeaking(false);
        };

        setIsSpeaking(true);
      }
    },
    [speakerNumber],
  );

  const stopSpeaking = useCallback(() => {
    if (synth.current && (synth.current.speaking || synth.current.paused)) {
      synth.current.cancel();
      setIsSpeaking(false);
      setIsFinished(false);
      setIsPaused(false);
    }
  }, []);

  const pauseSpeaking = useCallback(() => {
    if (synth.current && synth.current.speaking && !isPaused) {
      synth.current.pause();
      setIsPaused(true);
    }
  }, [isPaused]);

  const resumeSpeaking = useCallback(() => {
    if (synth.current && isPaused) {
      synth.current.resume();
      setIsPaused(false);
      setIsSpeaking(true);
    }
  }, [isPaused]);

  useEffect(() => {
    return () => {
      if (synth.current && (synth.current.speaking || synth.current.paused)) {
        synth.current.cancel();
      }
    };
  }, []);

  return {
    startSpeaking,
    stopSpeaking,
    pauseSpeaking,
    resumeSpeaking,
    isSpeaking,
    isFinished,
  };
};
