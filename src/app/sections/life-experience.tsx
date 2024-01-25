import { ExperienceCard } from "../components/experience-card";

const experiencesData = [
  {
    subtitle: "Adventures",
    content:
      "I believe that the world belongs to the brave and the curious, those who seek experience in every moment without fear or hesitation. Adventure and experience are the fuel that drive my life, and I seek them out with open arms and an open mind.",
  },
  {
    subtitle: "Perspectives",
    content:
      "I am constantly seeking new knowledge and perspectives, and I believe that everyone I meet has something to teach me. I try to approach each interaction with openness and a willingness to learn, always seeking to uncover the wisdom that others have to offer.",
  },
  {
    subtitle: "Collaboration",
    content:
      "I firmly believe in the power of collaboration and mutual respect. By working together and embracing our differences, we can achieve far more than we could on our own. That's why I strive to listen to others with an open mind and treat them with kindness and empathy.",
  },
  {
    subtitle: "Impact",
    content:
      "Wherever I go and whatever I do, I strive to leave a positive impact. I follow the Scout Rule of Software Engineering, which is to leave things better than I found them, and apply that principle to every aspect of my life.",
  },
  {
    subtitle: "Happiness",
    content:
      "Finally, I try not to take myself too seriously. Life is meant to be enjoyed and celebrated, and I strive to approach it with a sense of humor and lightheartedness, never forgetting to appreciate the beauty and joy that surrounds us every day.",
  },
];

export default function LifeExperience() {
  return (
    <div className="flex w-full flex-col justify-center items-center px-4 py-6 max-md:max-w-full max-md:px-5">
      <header className="text-isLarge md:text-screenLarge text-orange-500 mb-5 text-center font-semibold tracking-tight">
        <h2>Some thoughts on life</h2>
      </header>
      <p className="text-black text-center font-light tracking-tight max-md:max-w-full max-md:mt-10 mb-3">
        I believe that a person&apos;s personal and professional lives are
        inseparable, as we are always whole individuals, regardless of the
        context. Therefore, my personal beliefs and values inevitably influence
        my professional work and approach. With this in mind, and because I
        believe it fosters better understanding of me as a colleague and a
        person, I&apos;d like to share 5 of my core convictions. These beliefs
        have been shaped by my life experiences, the people I&apos;ve
        encountered, and the various influences and inputs that enrich my daily
        life.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 max-md:max-w-full max-md:mt-10">
        {experiencesData.map((experience, index) => (
          <ExperienceCard
            key={index}
            subtitle={experience.subtitle}
            content={experience.content}
          />
        ))}
        <ExperienceCard
          centeredContent={
            "I share my thoughts to show people who think like me that they are not alone."
          }
        />
      </div>
    </div>
  );
}
