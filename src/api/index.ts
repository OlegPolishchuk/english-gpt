const URL = process.env.NEXT_PUBLIC_CHAT_GPT_ENDPOINT_DEV;
const TOKEN = process.env.NEXT_PUBLIC_CHAT_GPT_API_KEY_DEV;

export const sendAudio = (file: FormData) => {
  // fetch('https://api.openai.com/v1/audio/transcriptions', {
  //    method: 'POST',
  //    headers: {
  //      Authorization: `Bearer ${TOKEN}`,
  //      'Content-Type': 'multipart/form-data'
  //    },
  //    body: JSON.stringify(file)
  //  })
  //   .then(res => res.json())
  //   .then(res => console.log(res))

  fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      // 'Content-Type': 'multipart/form-data'
    },
    body: file,
  })
    .then(res => res.text())
    .then(res => console.log(res));
};
