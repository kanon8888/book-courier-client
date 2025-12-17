import React, { useRef, useEffect, useState } from "react";
import book11 from '../../../assets/book-11.jpg';
import book12 from '../../../assets/book-12.jpg';
import book from '../../../assets/pngwing 1.png';

const Book = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState([false, false, false]);

  const cards = [
    { image: book11, text: "Discover a world of stories delivered right to your door. Your favorite books arrive faster and safer, making reading easier than ever with our quick and reliable service. Explore thousands of books and find the perfect one for every mood and moment. We deliver knowledge, imagination, and inspiration—bringing stories closer to you. Read more and worry less, because we handle the delivery with care." },
    { image: book12, text: "Discover a world of stories delivered right to your door. Your favorite books arrive faster and safer, making reading easier than ever with our quick and reliable service. Explore thousands of books and find the perfect one for every mood and moment. We deliver knowledge, imagination, and inspiration—bringing stories closer to you. Read more and worry less, because we handle the delivery with care." },
    { image: book, text: "Discover a world of stories delivered right to your door. Your favorite books arrive faster and safer, making reading easier than ever with our quick and reliable service. Explore thousands of books and find the perfect one for every mood and moment. We deliver knowledge, imagination, and inspiration—bringing stories closer to you. Read more and worry less, because we handle the delivery with care." },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // stagger animation
            setTimeout(() => setVisible([true, false, false]), 100);
            setTimeout(() => setVisible([true, true, false]), 300);
            setTimeout(() => setVisible([true, true, true]), 500);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef} className="space-y-8 mt-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`flex items-center gap-8 p-6 rounded-xl shadow-md bg-gray-300 transform transition-all duration-700
            ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} 
            ${visible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <img
            className="w-[280px] h-[200px] object-cover rounded-xl shadow-sm"
            src={card.image}
            alt=""
          />
          <p className="text-black leading-relaxed text-lg">{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Book;
