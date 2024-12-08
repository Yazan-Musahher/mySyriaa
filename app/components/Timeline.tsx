"use client";

import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  event: string;
  image: string;
}

const timelineData: TimelineEvent[] = [
    {
      year: "2011",
      event: "بداية الثورة السورية في مارس 2011",
      image: "/images/2011.jpg",
    },
    {
      year: "2012",
      event: "تحرير الثوار الأحرار لمدينة إدلب بالكامل في ديسمبر 2012",
      image: "/images/idlib.jpg",
    },
    {
      year: "2012",
      event: "سيطرة الثوار الأحرار على أجزاء واسعة من مدينة حماة في أغسطس 2012",
      image: "/images/Hama.jpg",
    },
    {
      year: "2013",
      event: "تحرير مدينة الرقة لتصبح أول مدينة سورية تحت سيطرة الثوار في مارس 2013",
      image: "/images/Raqa.jpg",
    },
    {
      year: "2014",
      event: "تحرير الثوار لأجزاء كبيرة من مدينة حلب في يوليو 2014",
      image: "/images/Halab2014.jpeg",
    },
    {
      year: "2020",
      event: "تصعيد عسكري كبير في إدلب مع استمرار الثوار في الدفاع عن المدينة",
      image: "/images/2020.jpg",
    },
    {
      year: "2024",
      event: "تحرير مدينة حلب بالكامل على يد الثوار الأحرار في 3 ديسمبر 2024",
      image: "/images/halab2024.jpeg",
    },
    {
      year: "2024",
      event: "تحرير مدينة حماة بالكامل على يد الثوار الأحرار في 5 ديسمبر 2024",
      image: "/images/Hama2024.png",
    },
    {
      year: "2024",
      event: "تحرير مدينة حمص بالكامل على يد الثوار الأحرار في 6 ديسمبر 2024",
      image: "/images/Homs.jpeg",
    },
    {
      year: "2024",
      event: "تحرير مدينة دمشق بالكامل وسقوط نظام الأسد على يد الثوار الأحرار في 8 ديسمبر 2024",
      image: "/images/Sham2024.png",
    },
  ];
  

const Timeline: React.FC = () => {
  return (
    <div className="space-y-16">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        التاريخ والتسلسل الزمني للأحداث
      </h2>
      <div className="flex flex-col items-center space-y-10">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`w-full flex flex-col lg:flex-row ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            } items-center justify-center space-y-6 lg:space-y-0 lg:space-x-10`}
          >
            {/* Image Section */}
            <motion.img
              src={item.image}
              alt={`${item.year} event`}
              className="w-64 h-40 object-cover rounded-lg shadow-lg"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Content Section */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="bg-green-500 text-white font-bold py-2 px-4 rounded-full">
                {item.year}
              </div>
              <div className="w-1 bg-white h-10 my-4"></div>
              <motion.div
                className="bg-white text-black p-4 rounded-lg shadow-lg max-w-md"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
                }}
              >
                {item.event}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
