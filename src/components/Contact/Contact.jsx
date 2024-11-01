import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import s from "./Contact.module.css";

const Contact = ({ deleteContact, contacts: { id, name, number } }) => {
  return (
    <li className={s.item}>
      <div className={s.card}>
        <p className={s.name}>
          <FaUser className={s.icon} />
          {name}
        </p>

        <p className={s.number}>
          <BsFillTelephoneFill className={s.icon} />
          {number}
        </p>
      </div>
      <button onClick={() => deleteContact(id)} className={s.btn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
