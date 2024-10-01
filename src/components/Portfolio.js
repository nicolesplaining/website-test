import styles from './Portfolio.module.css';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "21st Century Global and Regional Surface Temperature Projections",
      description: "Used climate models to estimate calendar years of when surface temperatures will increase by 1.5, 2.0, and 2.5°C relative to the preindustrial period, both globally and in three target regions: the Arctic Circle, Tropics, and Antarctic Circle. Won the CESASC JHJ Prize for Fundamental Science in Physics (doi.org/10.1029/2022EA002662). \n\nCitation: Ma, N., Jiang, J. H., Hou, K., Lin, Y.,Vu, T., Rosen, P. E., et al. (2022). 21st century global and regional surface temperature projections. Earth and Space Science, 9, e2022EA002662.",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "A Novel System for Regional Twitter Hate Speech Analysis and Detection Using Deep Learning Models and Web Scraping",
      description: "Constructed binary classification and multi-class CNNs (Convolutional Neural Networks) to detect hate speech from real-time Twitter data and classify tweets with hate speech into five categories. The binary classification model reached an AUC score of 98.95% and the multi-class classification model reached an AUC score of 89.46%. Won 1st in the 2022 igniteCS Programming Expo (doi.org/10.5121/csit.2023.130207). \n\n Citation: Ma, Nicole & Sun, Yu. (2023). A Novel System for Regional Twitter Hate Speech Analysis and Detection using Deep Learning Models and Web Scraping. 93-103. 10.5121/csit.2023.130207.",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      title: "Constructing a Novel Multidirectional Stochastic Process Model to Simulate the Latitude of the North Atlantic Jet Stream",
      description: "Created set of multidirectional stochastic process models to simulate the latitude of the North Atlantic Jet Stream by applying vector autoregression. Reached 36.1% improvement from the RMSE score of the baseline, unidirectional model. Won 1st Place in the Virtual Region Junior Science and Humanities Symposium (JSHS) (bit.ly/NJSHS NMa).",
      image: "/images/project3.jpg",
    },
    {
      id: 4,
      title: "Using Machine Learning to Improve Offshore Wind Resource Assessment and Forecasting.",
      description: "Constructed a Random Forest Regressor, a Support Vector Machine, a Convolutional Neural Network, and a Feedforward Neural Network to reduce biases in ERA5 wind speeds by over 50%. Presenting research as 1st author at the 2024 NAWEA/WindTech conference (Paper in Progress).",
      image: "/images/project4.jpg",
    },
    // {
    //   id: 5,
    //   title: "Project 5",
    //   description: "This is the description for project 5.",
    //   image: "/images/project5.jpg",
    // },
    // {
    //   id: 6,
    //   title: "Project 6",
    //   description: "This is the description for project 6.",
    //   image: "/images/project6.jpg",
    // },
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
