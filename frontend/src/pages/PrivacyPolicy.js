import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PrivacyPolicy() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-white mt-10 md:mt-24 mb-8 md:mb-12">
      <h1 className="text-3xl md:text-5xl mt-28 font-bold text-center">Privacy Policy</h1>
      <div className="text-gray-600 mt-14">
        <h1 className="text-start text-xl md:text-3xl font-semibold text-black">
          Privacy Policy for NefTap
        </h1>
        <br />
        <p className="text-gray-600">
          At NefTap, accessible from https://neftap.com/, one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by Neftap and how we use it. If you have additional questions or
          require more information about our Privacy Policy, do not hesitate to
          contact us. This Privacy Policy applies only to our online activities
          and is valid for visitors to our website with regards to the
          information that they shared and/or collect in NefTap. This policy
          is not applicable to any information collected offline or via channels
          other than this website.
        </p>
      </div>
      <div className="text-gray-600 mt-4">
        <h1 className="text-start text-xl md:text-3xl font-semibold text-black">
          Consent
        </h1>
        <br />
        <p className="text-gray-600">
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
      </div>
      <div className="text-gray-600 mt-4">
        <h1 className="text-start text-xl md:text-3xl font-semibold text-black">
          Information we collect
        </h1>
        <br />
        <p className="text-gray-600">
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information. If you
          contact us directly, we may receive additional information about you
          such as your name, email address, phone number, the contents of the
          message and/or attachments you may send us, and any other information
          you may choose to provide. When you register for an Account, we may
          ask for your contact information, including items such as name,
          company name, address, email address, and telephone number.
        </p>
      </div>
      <div className="text-gray-600 mt-4">
        <h1 className="text-start text-xl md:text-3xl font-semibold text-black">
          How we use your information
        </h1>
        <br />
        <p className="text-gray-600">
          We use the information we collect in various ways, including to:
          <br />
          Provide, operate, and maintain our website
          <br /> Improve, personalize, and expand our website
          <br /> Understand and analyze how you use our website
          <br />
          Develop new products, services, features, and functionality
          <br />
          Communicate with you, either directly or through one of our partners,
          including for customer service, to provide you with updates and other
          information relating to the website, and for marketing and promotional
          purposes Send you emails Find and prevent fraud.
        </p>
      </div>
      <div className="text-gray-600 mt-4">
        <h1 className="text-start text-xl md:text-3xl font-semibold text-black">
          Log Files
        </h1>
        <br />
        <p className="text-gray-600">
          NefTap follows a standard procedure of using log files. These files
          log visitors when they visit websites. All hosting companies do this
          and a part of hosting services' analytics. The information collected
          by log files include internet protocol (IP) addresses, browser type,
          Internet Service Provider (ISP), date and time stamp, referring/exit
          pages, and possibly the number of clicks. These are not linked to any
          information that is personally identifiable. The purpose of the
          information is for analyzing trends, administering the site, tracking
          users' movement on the website, and gathering demographic information.
        </p>
      </div>
      <div className="text-gray-600 mt-4">
        <h1 className="text-start text-xl md:text-3xl font-semibold text-black">
          Cookies and Web Beacons
        </h1>
        <br />
        <p className="text-gray-600">
          Like any other website, NefTap uses 'cookies'. These cookies are
          used to store information including visitors' preferences, and the
          pages on the website that the visitor accessed or visited. The
          information is used to optimize the users' experience by customizing
          our web page content based on visitors' browser type and/or other
          information.
        </p>
      </div>
      <div className="text-gray-600 mt-14">
        <h1 className="text-start text-xl md:text-3xl font-semibold text-black">
          Advertising Partners Privacy Policies
        </h1>
        <br />
        <p className="text-gray-600">
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of NefTap. Third-party ad servers or ad networks
          uses technologies like cookies, JavaScript, or Web Beacons that are
          used in their respective advertisements and links that appear on
          Neftap, which are sent directly to users' browser. They automatically
          receive your IP address when this occurs. These technologies are used
          to measure the effectiveness of their advertising campaigns and/or to
          personalize the advertising content that you see on websites that you
          visit.
          <br /> Note that NefTap has no access to or control over these
          cookies that are used by third-party advertisers.
        </p>
      </div>
      <div className="text-gray-600 mt-4">
        <h1 className="text-start text-xl md:text-3xl font-semibold text-black">
          Third Party Privacy Policies
        </h1>
        <br />
        <p className="text-gray-600">
          NefTap Privacy Policy does not apply to other advertisers or websites.
          Thus, we are advising you to consult the respective Privacy Policies
          of these third-party ad servers for more detailed information. It may
          include their practices and instructions about how to opt-out of
          certain options. You can choose to disable cookies through your
          individual browser options. To know more detailed information about
          cookie management with specific web browsers, it can be found at the
          browsers' respective websites.
        </p>
      </div>
      <div className="text-gray-600 mt-4">
        <h1 className="text-start text-xl md:text-3xl font-semibold text-black">
          CCPA Privacy Rights (Do Not Sell My Personal Information)
        </h1>
        <br />
        <p className="text-gray-600">
          Under the CCPA, among other rights, California consumers have the
          right to: Request that a business that collects a consumer's personal
          data disclose the categories and specific pieces of personal data that
          a business has collected about consumers.
          <br /> Request that a business delete any personal data about the
          consumer that a business has collected. Request that a business that
          sells a consumer's personal data, not sell the consumer's personal
          data.
          <br /> If you make a request, we have one month to respond to you. If
          you would like to exercise any of these rights, please contact us.
        </p>
      </div>
      <div className="text-gray-600 mt-4">
        <h1 className="text-start text-xl md:text-3xl font-semibold text-black">
          GDPR Data Protection Rights
        </h1>
        <br />
        <p className="text-gray-600">
          We would like to make sure you are fully aware of all of your data
          protection rights. Every user is entitled to the following:
          <br /> The right to access – You have the right to request copies of
          your personal data. We may charge you a small fee for this service.
          <br /> The right to rectification – You have the right to request that
          we correct any information you believe is inaccurate. You also have
          the right to request that we complete the information you believe is
          incomplete.
          <br />
          The right to erasure – You have the right to request that we erase
          your personal data, under certain conditions.
          <br /> The right to restrict processing – You have the right to
          request that we restrict the processing of your personal data, under
          certain conditions.
          <br /> The right to object to processing – You have the right to
          object to our processing of your personal data, under certain
          conditions.
          <br /> The right to data portability – You have the right to request
          that we transfer the data that we have collected to another
          organization, or directly to you, under certain conditions.
          <br /> If you make a request, we have one month to respond to you. If
          you would like to exercise any of these rights, please contact us.
        </p>
      </div>
      <div className="text-gray-600 mt-4">
        <h1 className="text-start text-xl md:text-3xl font-semibold text-black">
          Children's Information
        </h1>
        <br />
        <p className="text-gray-600">
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity. NefTap
          does not knowingly collect any Personal Identifiable Information from
          children under the age of 13. If you think that your child provided
          this kind of information on our website, we strongly encourage you to
          contact us immediately and we will do our best efforts to promptly
          remove such information from our records.
        </p>
      </div>
      <div className="text-gray-600 mt-4">
        <h1 className="text-start text-xl md:text-3xl font-semibold text-black">
          Changes to This Privacy Policy
        </h1>
        <br />
        <p className="text-gray-600">
          We may update our Privacy Policy from time to time. Thus, we advise
          you to review this page periodically for any changes. We will notify
          you of any changes by posting the new Privacy Policy on this page.
          These changes are effective immediately, after they are posted on this
          page.<br/> Contact Us<br/> If you have any questions or suggestions about our
          Privacy Policy, do not hesitate to contact us on
          support@neftap.com.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
