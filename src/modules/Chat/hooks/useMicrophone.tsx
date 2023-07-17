import 'regenerator-runtime/runtime';

import { useEffect, useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const MIC_INIT_DELAY = 3000;

export const useMicrophone = (setMessage: (message: string) => void) => {
  const [isOn, setIsOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const timerId = useRef<number | null>(null);

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const startListening = async () => {
    const options = {
      continuous: true,
      language: 'en-US',
    };
    await SpeechRecognition.startListening(options);
    console.log('on');
  };

  const stopListening = async () => {
    await SpeechRecognition.stopListening();
    resetTranscript();
  };

  const handleOn = async () => {
    await startListening();

    setIsLoading(true);

    timerId.current = window.setTimeout(async () => {
      setIsLoading(false);
      setIsOn(true);
    }, MIC_INIT_DELAY);
  };

  const handleOff = async () => {
    setIsOn(false);

    await stopListening();
  };

  useEffect(() => {
    if (transcript) {
      setMessage(transcript);
    }
  }, [transcript]);
  //
  // if (!isClient) {
  //   return null;
  // }

  // if (!browserSupportsSpeechRecognition) {
  //   return <span>Browser doesn&apos;t support speech recognition</span>;
  // }

  return {
    isOn,
    isLoading,
    handleOff,
    handleOn,
  };
};
