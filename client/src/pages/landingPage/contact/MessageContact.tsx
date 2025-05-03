// components/MessageContact.jsx

const MessageContact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-2xl font-bold text-center mb-2 text-[var(--text-black)]">
          Get in Touch
        </h1>
        <h2 className="text-xl font-semibold text-center mb-4 text-[var(--text-black)]">
          Contact Us
        </h2>
        <p className="text-sm text-center text-[var(--gray-color)] mb-4">
          We would love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-[var(--text-black)] mb-1">First Name</label>
            <input
              type="text"
              className="p-2 border text-center text-[var(--text-black)]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[var(--text-black)] mb-1">Last Name</label>
            <input
              type="text"
              className="p-2 border text-center text-[var(--text-black)]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[var(--text-black)] mb-1">Email</label>
            <input
              type="email"
              className="p-2 border text-center text-[var(--text-black)]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[var(--text-black)] mb-1">Phone</label>
            <input
              type="tel"
              className="p-2 border text-center text-[var(--text-black)]"
            />
          </div>
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label className="text-[var(--text-black)] mb-1">Message</label>
            <textarea
              className="p-2 border text-center text-[var(--text-black)] min-h-[120px]"
            ></textarea>
          </div>
          <div className="flex justify-start col-span-1 md:col-span-2">
            <button
              type="submit"
              className="text-white px-4 py-2 bg-[var(--primary-color)] hover:bg-opacity-90 rounded"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageContact;
