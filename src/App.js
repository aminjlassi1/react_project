import React, { useState, useEffect } from 'react';

const RandomImageComponent = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await fetch('https://picsum.photos/200/300');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const imageUrl = response.url;
        setImageUrl(imageUrl);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomImage();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Random Image</h1>
      {imageUrl && <img src={imageUrl} alt="Random" />}
    </div>
  );
};

export default RandomImageComponent;
