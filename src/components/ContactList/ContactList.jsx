import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          deleteContact={deleteContact}
          key={id}
          contacts={{ id, name, number }}
        />
      ))}
    </ul>
  );
};

export default ContactList;
