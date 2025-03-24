import { useState } from "react";
import { MdOutlinePhotoCamera } from "react-icons/md";

function Profile() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl: string = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const triggerFileInput = () => {
    const fileInput = document.getElementById("imageUpload") as HTMLInputElement;
    if (fileInput) fileInput.click();
  };

  return (
    <div className="sm:mr-20 sm:w-[20rem] lg:w-[900px] px-4 md:px-10 h-auto md:h-[10rem] flex flex-col md:flex-row justify-between items-center bg-[var(--card-color)] rounded-lg p-4 md:p-6 gap-4 md:gap-0">
      <div className="flex flex-col md:flex-row items-center gap-4 w-full">
        <div className="relative flex items-center justify-center bg-[var(--light-gray)] w-[7rem] h-[7rem] rounded-lg overflow-hidden">
          {image ? (
            <img src={image} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <p className="flex items-center justify-center bg-[var(--primary-light)] w-[6.5rem] h-[6.5rem] text-3xl text-[var(--text-black)] rounded-lg">
              AL
            </p>
          )}
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <button
            onClick={triggerFileInput}
            className="absolute bottom-1 right-1 bg-[var(--gray-color)] p-1 rounded-full text-white shadow-md text-[var(--text-white)]"
          >
            <MdOutlinePhotoCamera size={24} />
          </button>
        </div>
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-[var(--text-black)]">Victor Okeke</p>
          <p className="text-md text-[var(--text-black)]">love@gmail.com</p>
          <p className="text-md font-bold text-[var(--gray-color)]">Investor</p>
        </div>
      </div>
      <div className="w-full md:w-auto flex justify-center md:justify-end">
        <button className="w-full md:w-[10rem] bg-[var(--error-color)] text-[var(--text-white)] p-2 rounded-md">
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default Profile;
