import styles from './Portfolio.module.css';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Project 1",
      description: "This is the description for project 1.",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is the description for project 2.",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is the description for project 3.",
      image: "/images/project3.jpg",
    },
    {
      id: 4,
      title: "Project 4",
      description: "This is the description for project 4.",
      image: "/images/project4.jpg",
    },
    {
      id: 5,
      title: "Project 5",
      description: "This is the description for project 5.",
      image: "/images/project5.jpg",
    },
    {
      id: 6,
      title: "Project 6",
      description: "This is the description for project 6.",
      image: "/images/project6.jpg",
    },
  ];

  return (
    <section id ='portfolio'>
        <h1 className={styles.titl}>Portfolio</h1>
        <div className={styles.portfolioContainer}>
        {portfolioItems.map((item) => (
            <div key={item.id} className={styles.portfolioItem}>
            <div className={styles.portfolioContent}>
                <img src={item.image} alt={item.title} className={styles.portfolioImage} />
                <div className={styles.portfolioText}>
                <h2 className={styles.portfolioTitle}>{item.title}</h2>
                <p className={styles.portfolioDescription}>{item.description}</p>
                </div>
            </div>
            </div>
        ))}
        </div>
    </section>
  );
};

export default Portfolio;
