import { motion } from "framer-motion";

const det = {
  address: "Arakkal House, Siyankandam, Pulikkal (P.O), Malappuram ",
  phoneNo: "+91 94975 33188",
  email: "irfan.abdulhameed85@gmail.com",
};

const Contact = () => {
  return (
    <div className="border-b border-neutral-700 pb-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="my-10 text-center text-4xl">
          Get in touch with<span className="text-neutral-500"> Me</span>
        </h1>
        <div className="text-center tracking-tighter">
          <p className="my-4 font-extralight">{det.address}</p>
          <p className="my-4 font-extralight">{det.phoneNo}</p>
          <a href="#" className="border-b border-neutral-600 font-extralight">
            {det.email}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
