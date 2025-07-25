import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ReturnRefund() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-white mt-10 md:mt-24 mb-8 md:mb-12">
      <h1 className="text-3xl md:text-5xl mt-28 font-bold text-center">
        Return And Replacement Policy
      </h1>
      <div className="text-gray-600 mt-14">
        <p className="text-gray-600">
          If your item arrives damaged, defective, or different from what you
          ordered, you can request a free replacement within 3 days of delivery.
          Please keep the item in its original condition with the manufacturer's
          packaging. We may contact you to understand the issue before issuing a
          replacement.
          <br /> Important Note:
          <br /> Customized orders: We print cards according to the information
          provided during the order. Therefore, we cannot accept replacement,
          refund, or cancellation requests for spelling mistakes or if you
          simply change your mind. To raise a replacement request CLICK HERE.
        </p>
      </div>
      <div className="text-gray-600 mt-4">
        <h1 className="text-start text-xl md:text-3xl font-semibold text-black">
          Refund/Cancellation Policy
        </h1>
        <br />
        <p className="text-gray-600">
          No refund will be issued if the refund and/or cancellation request is
          raised after 3 Hours of order placement. To raise your
          cancellation/refund request CLICK HERE. Please be aware that refunds
          will not be provided if your phone lacks NFC capability.
        </p>
      </div>
      <div className="text-gray-600 mt-4">
        <h1 className="text-start text-xl md:text-3xl font-semibold text-black">
          Warranty Policy
        </h1>
        <br />
        <p className="text-gray-600">
          Your card is covered by a one-year warranty starting from the date of
          order delivery. This warranty applies only under the following
          condition:<br/> (a) Tapping Issue : If the card does not tap on your
          NFC-enabled smartphone.<br/> Important Note : To use the tap feature, your
          smartphone must have NFC capability.<br/> To raise a replacement request
          CLICK HERE.
        </p>
      </div>
    </div>
  );
}

export default ReturnRefund;
