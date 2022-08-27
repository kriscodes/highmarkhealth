import Image from 'next/image'

const Content = () => {
  return (
    <div style={{ display: "flex", margin: "2rem 0" }}>
      <div style={{ height: "300px", overflow: "scroll" }}>
        <h3>Context</h3>
        <p>
          There are all sorts of reasons why you'd want to know a hospital's quality rating.
        </p>
        <p>
          Your mom is having her second hip replacement. Her first one went terribly and 
          you're nervous about how she'll do. Which hospital would you suggest she have her surgery?
        </p>
        <p>
          You're selecting a health plan on your state's Exchange, but your top two choices partner 
          with different hospitals. How will you decide which plan to pick?
        </p>
        <p>
          Your brother has Cystic Fibrosis and has to go to the ER frequently. He hates waiting. Which
          hospitals/states provide care in the timeliest manner?
        </p>
        <p>
          Your in-laws moved to Florida recently to retire, and have been trying to convince you to move there
          too. You're looking for any way possible to show them that your state is better. Does your state have
          better hospitals?
        </p>
        <p>
          Every hospital in the United States of America that accepts publicly insured patients (Medicaid or
          MediCare) is required to submit quality data, quarterly, to the Centers for Medicare & Medicaid Services
          (CMS). There are very few hospitals that do not accept publicly insured patients, so this is quite a
          comprehensive list.
        </p>
        <h3>More Info</h3>
        <p>
          This file contains general information about all hospitals that have been registered with Medicare,
          including their addresses, type of hospital, and ownership structure. It also contains information about
          the quality of each hospital, in the form of an overall rating (1-5, where 5 is the best possible rating & 1
          is the worst), and whether the hospital scored above, same as, or below the national average for a
          variety of measures. 
        </p>
        <h3>Acknowledgements</h3>
        <h3>Attention: </h3>
        <p>
          Works of the U.S. Government are in the public domain and permission is not required to reuse them.
          An attribution to the agency as the source is appreciated. Your materials, however, should not give the
          false impression of government endorsement of your commercial products or services. See 42 U.S.C.
          1320b-10.
        </p>
        <p>Inspiration</p>
        <p>
          Which hospital types & hospital ownerships are most common?
        </p>
      </div>
      <div style={{ marginLeft: "2rem" }}>
        <Image src={"/images/Section4.jpg"} alt="Section 4" width="1500px" height="1200px"/>
      </div>
    </div>
  )
}

export default Content;