import Footer from "./Footer";
import Header from "./Header";
import Intro from "./Intro";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Education from "./Education";
import Experience from "./Experience";
import "../styles/main.css";

const Data = {
  Name: "Anushka Raj",
  Title: "Software Engineer",
  Desc:
    "I plan, design wonderfully essential things and I adore what I do, and I cherish codes more than chocolates.",
  Linkedin: "https://www.linkedin.com/in/anushka-raj/",
  Experiences: [
    {
      Title: "Software Engineer Trainee",
      Desc: "Shivguru IT solutions and consultancy Pvt. Limited",
      Timeline: "Aug 2021 – Present, India"
    },
    {
      Title: "Freelance Graphic Designer",
      Desc: "Freelance",
      Timeline: "May 2021 – Present, Remote"
    },
    {
      Title: "Internshala Student Partner (ISP) 21",
      Desc: "Internshala",
      Timeline: "Feb 2021 – Apr 2021, Campus Program"
    }
  ],
  Educations: [
    {
      Title: "Master of Computer Applications",
      Desc: "JECRC University",
      Timeline: "2020-2022, Jaipur"
    },
    {
      Title: "Bachelor of Computer Applications",
      Desc: "Maulana Mazharul Haque Arabic & Persian University",
      Timeline: "2017-2020, Patna"
    }
  ],
  Skills: [
    { Icon: "https://img.icons8.com/color/48/000000/html-5--v2.png" },
    { Icon: "https://img.icons8.com/color/48/000000/css3.png" },
    { Icon: "https://img.icons8.com/officel/48/000000/json.png" },
    { Icon: "https://img.icons8.com/color/48/000000/javascript--v1.png" },
    { Icon: "https://img.icons8.com/color/48/000000/react-native.png" },
    { Icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
    { Icon: "https://img.icons8.com/ios-filled/48/000000/c.png" },
    {
      Icon:
        "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
    },
    { Icon: "https://img.icons8.com/fluency/48/000000/mysql-logo.png" },
    { Icon: "https://img.icons8.com/color/48/000000/git.png" },
    { Icon: "https://img.icons8.com/fluency/48/000000/github.png" },
    { Icon: "https://img.icons8.com/fluency/48/000000/azure-1.png" }
  ],
  Projects: [
    {
      Image:
        "https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      Desc: "Personal Portfolio",
      Tags: "Portfolio",
      links: "https://anushkaraj.tech/"
    },
    {
      Image:
        "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      Desc: "Book Recommendation App",
      Tags: "React",
      links: "https://book-recommendation-anush.netlify.app/"
    },
    {
      Image:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      Desc: "SignIn/SignUp Design",
      Tags: "UX/UI",
      links: "https://signin-anush.netlify.app/"
    },
    {
      Image: "https://img.icons8.com/fluency/100/000000/github.png",
      Desc: "Github User Details Fetcher",
      Tags: "React",
      links: "https://githubcards-app.netlify.app/"
    }
  ]
};

window.document.title = Data.Name + " Portfolio";

export default function App() {
  return (
    <div className="App">
      <Header dark={true}>{Data.Name}</Header>
      <main>
        <Intro
          Name={Data.Name}
          Title={Data.Title}
          Desc={Data.Desc}
          Buttons={
            <>
              <a
                href={Data.Linkedin}
                rel="noreferrer"
                target="_blank"
                class="btn btn-primary my-2 me-2"
              >
                Connect on Linkedin
              </a>
              <a href="#Portfolio" class="btn btn-secondary my-2">
                See My Portfolio
              </a>
            </>
          }
        />
        <Experience Experiences={Data.Experiences} />
        <Education Educations={Data.Educations} />
        <Skills Skills={Data.Skills} />
        <Portfolio Projects={Data.Projects} />
      </main>
      <Footer Name={Data.Name} />
    </div>
  );
}
