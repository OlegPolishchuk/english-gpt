import { useCallback, useEffect, useRef, useState } from 'react';

const SPEAKER_NUMBER = 7;

export const useSpeechFromText = (speakerNumber = SPEAKER_NUMBER) => {
  const synth = useRef<SpeechSynthesis | undefined>();
  const utterance = useRef<SpeechSynthesisUtterance | undefined>();

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const startSpeaking = useCallback(
    (text: string) => {
      setIsFinished(false);

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
    if (synth && synth.current?.speaking) {
      synth.current.cancel();

      setIsSpeaking(false);
      setIsFinished(false);
    }
  }, []);

  const pauseSpeaking = useCallback(() => {
    if (synth && synth.current?.speaking) {
      synth.current.pause();

      setIsSpeaking(false);
    }
  }, []);

  const resumeSpeaking = useCallback(() => {
    if (synth && synth.current?.paused) {
      synth.current.resume();

      setIsSpeaking(true);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (synth.current && synth.current.speaking) {
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
