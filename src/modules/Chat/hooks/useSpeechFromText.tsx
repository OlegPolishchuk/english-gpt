import { useCallback, useEffect, useRef } from 'react';

const SPEAKER_NUMBER = 7;

export const useSpeechFromText = (speakerNumber = SPEAKER_NUMBER) => {
  const synth = useRef<SpeechSynthesis | undefined>();
  const utterance = useRef<SpeechSynthesisUtterance | undefined>();

  const speak = useCallback((text: string) => {
    if (typeof window !== 'undefined') {
      synth.current = window.speechSynthesis;
      utterance.current = new SpeechSynthesisUtterance();
      utterance.current.text = text;

      if (synth.current.getVoices().length === 0) {
        const voicesChangedHandler = () => {
          if (synth.current && utterance.current) {
            synth.current.removeEventListener('voiceschanged', voicesChangedHandler);

            utterance.current.voice = synth.current.getVoices()[speakerNumber];
            synth.current.speak(utterance.current!);
          }
        };

        synth.current.addEventListener('voiceschanged', voicesChangedHandler);
      } else {
        utterance.current.voice = synth.current.getVoices()[speakerNumber];
        synth.current.speak(utterance.current!);
      }
    }
  }, []);

  const stopSpeaking = useCallback(() => {
    if (synth && synth.current?.speaking) {
      synth.current.cancel();
    }
  }, []);

  const pauseSpeaking = useCallback(() => {
    if (synth && synth.current?.speaking) {
      synth.current.pause();
    }
  }, []);

  const resumeSpeaking = useCallback(() => {
    if (synth && synth.current?.paused) {
      synth.current.resume();
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
    speak,
    stopSpeaking,
    pauseSpeaking,
    resumeSpeaking,
    isSpeaking: synth.current?.speaking,
  };
};
