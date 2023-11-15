import React, { useEffect, useState } from "react";

const WorkCard = ({ imgArr, work }) => {
  const [img, setImg] = useState(null);
  function getRandomImage(imgArr) {
    const randomIndex = Math.floor(Math.random() * imgArr.length);
    return imgArr[randomIndex];
  }

  function getImageEvery6Seconds(imgArr) {
    setInterval(function () {
      const randomImage = getRandomImage(imgArr);
      setImg(randomImage);
    }, 6000);
  }
  useEffect(() => {
    getImageEvery6Seconds(imgArr);
  }, []);

  return (
    <a className="card yellow portf" href={work.link}>
      <img src={require(`../assets/${img !== null ? img : imgArr[0]}`)} />

      <h5>{work?.type} Application</h5>
      <p>{work?.name}</p>
    </a>
  );
};

export default WorkCard;
