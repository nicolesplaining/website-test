import Parallax from '@/components/Parallax'
import NavBar from '@/components/NavBar'
import Portfolio from '@/components/Portfolio'
import Experience from '@/components/Experience'

function Home() {
  return (
    <>
      <NavBar />
      <Parallax />
      {/* <div className='about'>
        <h2>
          Portfolio
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laborum ipsam corrupti asperiores magnam quos cumque animi tempore vero repellendus, harum odio neque quis, non temporibus. Inventore asperiores repudiandae praesentium ut, fugit quo esse, placeat ullam quibusdam perspiciatis delectus ducimus nihil. Dolorum nam veniam aperiam sapiente corporis! Quisquam, veritatis repellendus?</p>
      </div> */}
      <Portfolio />
      <Experience />

      <p>© 2024, Made with ❤️ by Nicole Ma</p>
    </>
  )
}

export default Home