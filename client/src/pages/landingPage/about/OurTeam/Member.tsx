import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Member = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { item } = location.state || {};

    useEffect(() => {
        if (!item) {
            navigate("/about/team", { replace: true });
        }
    }, [item, navigate]);

    if (!item) {
        return null; // Avoid rendering if item is null
    }

    return (
        <section className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-4">
            <div className="max-w-lg bg-white shadow-lg rounded-lg p-6 text-center">
                <img src={item.src} alt={item.name} className="w-40 h-40 rounded-full mx-auto mb-4" />
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-600">{item.title}</p>
                <p className="text-gray-700 text-sm mt-4">{item.description}</p>

                <div className="flex justify-center space-x-3 mt-4 text-2xl text-blue-500">
                    {item.media}
                    {item.face}
                    {item.youtube}
                </div>

                <button 
                    onClick={() => navigate(-1)}
                    className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    Back
                </button>
            </div>
        </section>
    );
};

export default Member;
