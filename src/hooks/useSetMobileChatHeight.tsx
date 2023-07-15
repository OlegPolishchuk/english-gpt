import { useEffect, useState } from 'react';

export const useSetMobileHeight = () => {
  const [height, setHeight] = useState(0);

  const handleResize = () => {
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    if (window) {
      setHeight(window.innerHeight);
    }
  }, []);

  // Добавляем обработчик события изменения размера окна
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Очищаем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return height;
};
