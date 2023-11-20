import React from "react";
import { Footer } from "../components/Footer";
import banner from "../images/banner.svg";

export const Education = () => {
  return (
    <div>
      <div>
        <div className="about-top">
          <div className="about-text">
            <h3>Credit Education</h3>
            {/* <h2>Know more</h2> */}
            <p>
              We are India's leading credit information company with one of the
              largest collections of consumer information.
            </p>
            <button>Know more</button>
          </div>
          <div className="img">
            <img
              style={{ width: "600px", margin: "1rem auto" }}
              src={banner}
              alt=""
            />
          </div>
        </div>
        <div className="about-middle">
          <div className="middle-left">
            <h2>About TransUnion CIBIL</h2>
            <p>About TransUnion CIBIL</p>
            <p>Company History</p>
            <p>Values and Beliefs</p>
            <p>Information Security</p>
            <p>Global Presence</p>
            <p>CSR</p>
            <p>Contact Us</p>
            <p>Careers</p>
            <p>Newsroom</p>
            <p>Corporate Information</p>
          </div>
          <div className="middle-right">
            <p>
              The credit score you are given in a free credit score app or
              website is referred to as an educational credit score. It is
              intended to help you monitor your credit score more regularly and
              educate you on ways to improve your credit score. (Not going to
              lie, most of them are also just trying to sell you a credit card
              too.) That being said, an educational credit score can be very
              useful in helping you identify possible fraudulent activity or
              other errors that maybe showing up on your credit report that
              don’t belong to you. Educational credit scores are calculated
              using what is known as a soft credit inquiry.
            </p>
            <p>
              When a lender looks at your credit score they are completing what
              is known as a hard credit inquiry. A hard credit inquiry allows
              the lender to look at your activity to date and requires your
              permission to pull this information. This is because a hard credit
              inquiry will leave a mark on your credit report. Generally the
              effect is negligible, but too many in a short period of time can
              negatively affect your credit score more significantly. A hard
              inquiry looks much closer at your various trade lines and past
              performance than a soft credit inquiry will, thus the reason they
              are not always the same even if pulled from the same credit
              bureau. A lender will only complete a hard credit inquiry when you
              are applying for a new trade line, such as an auto loan, mortgage,
              credit card, etc. If you are requesting a pre-approval they will
              do a soft pull first.
            </p>
            <p>
              Yes, the educational credit score you see in your free credit
              report tool is a trustworthy resource for keeping tabs on the
              health of your credit score. Even though it may not be exactly the
              same credit score as you would get with a hard credit inquiry, the
              information presented should still accurately reflect the credit
              lines you have open and your past payment history. Regularly
              keeping track of your credit score and your credit report is a
              healthy financial habit to get into. The best way to keep track of
              your credit is a combination of using free credit score tools and
              annually reviewing your free credit report from each of the three
              credit bureaus from annualcreditreport.com. This ensures you are
              knowledgeable about what is showing up on your credit report and
              how your credit score may be affecting the rest of your finances.
            </p>
          </div>
        </div>
        <hr style={{ backgroundColor: "0094e9c2", height: "2px" }} />
        <Footer />
      </div>
    </div>
  );
};
