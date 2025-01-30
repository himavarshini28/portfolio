import { Container, Row, Col } from "react-bootstrap";
import { ProfileCard } from "./ProfileCard";
import 'animate.css';
import gfg from "../assets/profiles/gfg.png";
import git from "../assets/profiles/image.png";
import cc from "../assets/profiles/cc.png";
import leetcode from "../assets/profiles/leetcode.png";
import hackerrank from "../assets/profiles/hackerrank.png";
import TrackVisibility from 'react-on-screen';

const profiles = [
  {
    name: 'GitHub',
    url: 'https://github.com/himavarshini28',
    content: 'projects',
    bgImage: git,
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/himavarshini_5/',
   content:"solved 200+ problems",
    bgImage:leetcode,
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/himavarshini5',
    content:"2⭐ @CodeChef with highest rating 1543",
    bgImage: cc,
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/user/himavarshini_28/',
    content:"solved 50+ problems",
    bgImage: gfg,
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/himavarshinimah1',
    content:'4-star in C and 2-star in Problem Solving',
    bgImage: hackerrank,
  },
];

const Profiles = () => {
  return (
    <section className="project" id="profiles">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Coding Profiles</h2>
                <Row className="py-5">
                  {
                    profiles.map((profile, index) => {
                      return (
                        <ProfileCard
                          key={index}
                          {...profile}
                        />
                      )
                    })
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200" alt="Background"></img>
    </section>
  )
}





export default Profiles;