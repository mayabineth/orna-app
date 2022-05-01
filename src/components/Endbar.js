import React from "react";
import { FaPhone } from "react-icons/fa";
import { AiFillHome, AiFillMail } from "react-icons/ai";

export default function Endbar() {
  return (
    <div className="endbar">
      <h4>{"\u00A9"}Orna Levit</h4>
      <h4>
        054-4510018 :טלפון <FaPhone />
      </h4>
      <h4>
        כתובת: בן יהודה 39, הרצליה -- מיקוד:4680441 <AiFillHome />{" "}
      </h4>
      <h4>
        ornalevit@gmail.com :מייל <AiFillMail />{" "}
      </h4>
    </div>
  );
}
