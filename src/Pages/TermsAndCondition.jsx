import React from 'react';
import { useNavigate } from 'react-router-dom';
const TermsAndConditions = () => {
    const navigate=useNavigate();
  return (
    <div className="container mx-auto pt-28 px-4">
        <div className='bg-yellow-400 shadow  hover:scale-110 duration-300 transition cursor-pointer rounded-full h-10 w-10 flex justify-center items-center'>
<p className='text-3xl text-white font-bold' onClick={()=>navigate('/')}>← </p>
        </div>
      <h2 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h2>

      <div className="prose">
        <h3>1. Introduction</h3>
        <p>
          These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at www.example.com.
        </p>

        <h3>2. Intellectual Property Rights</h3>
        <p>
          Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.
        </p>

        <h3>3. Restrictions</h3>
        <p>
          You are specifically restricted from all of the following:
          <ul>
            <li>publishing any Website material in any other media;</li>
            <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
            <li>publicly performing and/or showing any Website material;</li>
            <li>using this Website in any way that is or may be damaging to this Website;</li>
            <li>using this Website in any way that impacts user access to this Website;</li>
          </ul>
        </p>

        <h3>4. Disclaimer</h3>
        <p>
          To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
          <ul>
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
        </p>

        <h3>5. Variation of Terms</h3>
        <p>
          We are permitted to revise these Terms at any time as we see fit, and by using this Website you are expected to review these Terms on a regular basis.
        </p>

        <h3>6. Entire Agreement</h3>
        <p>
          These Terms constitute the entire agreement between Company Name and you in relation to your use of this Website and supersede all prior agreements and understandings.
        </p>

        <h3>7. Governing Law & Jurisdiction</h3>
        <p>
          These Terms will be governed by and interpreted in accordance with the laws of the State of State, and you submit to the non-exclusive jurisdiction of the state and federal courts located in State for the resolution of any disputes.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
