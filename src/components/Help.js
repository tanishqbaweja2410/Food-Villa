import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <>
          <button
            className="cursor-pointer underline"
            onClick={() => setIsVisible(false)}
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Help = () => {
  const [visibleSection, setIsVisibleSection] = useState("");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">FAQs</h1>
      <Section
        title={"What is Swiggy Customer Care Number?"}
        description={
          "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. "
        }
        isVisible={visibleSection === "customerCare"}
        setIsVisible={(flag) =>
          flag ? setIsVisibleSection("customerCare") : setIsVisibleSection("")
        }
      />
      <Section
        title={
          "I entered the wrong CVV, why did my transaction still go through?"
        }
        description={
          "The logic of validations of CVV resides with either payment gateways or banks. It is absolutely the choice of banks to have CVV as a mandatory input field or not. As per RBI guidelines, 2-Factor-Authentication is not mandatory for less than Rs 2000 rupees transaction. It is not in control of Swiggy. As an organization, we don't store any card information."
        }
        isVisible={visibleSection === "transaction"}
        setIsVisible={(flag) =>
          flag ? setIsVisibleSection("transaction") : setIsVisibleSection("")
        }
      />
      <Section
        title={"Can I edit my order?"}
        description={
          "In order to edit your order, please click on 'Help' and then 'I want to modify items in my order'. We will connect you to a support agent who will assist you with the same. Please note that your order can be edited only if the restaurant is yet to confirm your order. Post that, we may not be able to modify your order if food preparation has started."
        }
        isVisible={visibleSection === "editOrder"}
        setIsVisible={(flag) =>
          flag ? setIsVisibleSection("editOrder") : setIsVisibleSection("")
        }
      />
      <Section
        title={"I want to cancel my order"}
        description={
          "In order to cancel your order, please click on 'Help' and then 'I want to cancel my order'. Please note that we may charge you a cancellation fee as it helps us to minimise food wastage and also compensate our restaurant partners for cancelled orders."
        }
        isVisible={visibleSection === "cancelOrder"}
        setIsVisible={(flag) =>
          flag ? setIsVisibleSection("cancelOrder") : setIsVisibleSection("")
        }
      />
      <Section
        title={"Will Swiggy be accountable for quality/quantity?"}
        description={
          "Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant."
        }
        isVisible={visibleSection === "quality"}
        setIsVisible={(flag) =>
          flag ? setIsVisibleSection("quality") : setIsVisibleSection("")
        }
      />
      <Section
        title={"Can I order in advance?"}
        description={
          "Yes, you can order up to 2 days in advance on our platform. Click onthe 'NOW' button on the top left corner of the app to select your desired delivery time slot and place an order. This feature is currently available only on Android phones and in select cities."
        }
        isVisible={visibleSection === "advanceOrder"}
        setIsVisible={(flag) =>
          flag ? setIsVisibleSection("advanceOrder") : setIsVisibleSection("")
        }
      />
      <Section
        title={"Can I change the address / number?"}
        description={
          "Any major change in delivery address is not possible after you have placed an order with us. However, slight modifications like changing the flat number, street name, landmark etc. are allowed. If you have received delivery executive details, you can directly call him, else you could contact our customer service team."
        }
        isVisible={visibleSection === "changeInfo"}
        setIsVisible={(flag) =>
          flag ? setIsVisibleSection("changeInfo") : setIsVisibleSection("")
        }
      />
    </div>
  );
};

export default Help;
