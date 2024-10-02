import styles from './Experience.module.css';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      title: "Machine Learning and Atmospheric Science Research Fellow",
      company: "Stony Brook, Simons Summer Research Program",
      date: "June 2023 - Present",
      description: [
        "Created 8 machine learning models to bias-correct wind speed assessments and forecasts for offshore wind energy applications using TensorFlow and Python",
        "Reduced biases in state-of-the-art operational models by over 50% on 10 vertical levels",
        "Chosen as 1 of 44 research fellows from pool of ∼1000 nominees (∼4.4%)",
        "Abstract accepted for the 2024 NAWEA WindTech Conference; Currently first-authoring research paper"
      ],
    },
    {
      id: 2,
      title: "Climate Modeling Research Intern",
      company: "Caltech/NASA Jet Propulsion Laboratory",
      date: "Aug 2021 - Aug 2023",
      description: [
        "Statistically analyzed 11 climate models and applied them to forecast the timing of 9 global and regional climate tipping points using Python and R",
        "Published research paper as 1st author in the Q1 journal Earth and Space Science; only high school 1st author out of all issues in 2022",
        "Presented research at the American Meteorological Society 103rd Annual Meeting"
      ],
    },
    {
      id: 3,
      title: "Machine Learning Research Intern",
      company: "SoftCom Lab, California State Polytechnic University-Pomona",
      date: "November 2021 - January 2023",
      description: [
        "Used webscraping to collect 60K+ data points on X/Twitter",
        "Created two Convolutional Neural Networks to detect and classify hate speech with state-of-the-art AUC scores",
        "Created website using Google Firebase and Plotly to monitor $>$10K tweets each day and to display real-time analysis",
        "Published research as 1st author in the proceedings of the International Conference on Advances in Computer Science and Information Technology"
      ],
    },
  ];

  return (
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.timeline}>
        {experienceData.map((item) => (
          <div key={item.id} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineTitle}>{item.title}</h3>
              <h4 className={styles.timelineCompany}>{item.company}</h4>
              <p className={styles.timelineDate}>{item.date}</p>
              <ul className={styles.timelineDescription}>
                {item.description.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
