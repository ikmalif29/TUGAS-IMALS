import { Info, Heart, MessageCircle, X } from "lucide-react";
import { useState } from "react";

const Content = () => {
    const [likedFruits, setLikedFruits] = useState(Array(7).fill(false));
    const [selectedFruit, setSelectedFruit] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLikeModalOpen, setIsLikeModalOpen] = useState(false);
    const [likeMessage, setLikeMessage] = useState("");
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const [comment, setComment] = useState("");
    const [commentMessage, setCommentMessage] = useState("");

    const fruits = [
        {
            fruitName: "Apple",
            fruitColor: "Red",
            fruitPrice: 100000,
            image:
                "https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-fresh-apple-fruit-red-png-image_10203073.png",
        },
        {
            fruitName: "Banana",
            fruitColor: "Yellow",
            fruitPrice: 80000,
            image:
                "https://png.pngtree.com/png-clipart/20211227/original/pngtree-banana-fruit-png-image_6989216.png",
        },
        {
            fruitName: "Orange",
            fruitColor: "Orange",
            fruitPrice: 90000,
            image:
                "https://png.pngtree.com/png-clipart/20220530/original/pngtree-orange-fruit-vector-illustration-png-image_7767568.png",
        },
        {
            fruitName: "Cherry",
            fruitColor: "Red",
            fruitPrice: 120000,
            image:
                "https://publicdomainvectors.org/tn_img/pitr_Cherries_icon.webp",
        },
        {
            fruitName: "Grape",
            fruitColor: "Purple",
            fruitPrice: 70000,
            image:
                "https://png.pngtree.com/png-clipart/20230927/original/pngtree-grape-illustration-png-png-image_13001356.png",
        },
        {
            fruitName: "Durian",
            fruitColor: "Yellow",
            fruitPrice: 150000,
            image:
                "https://png.pngtree.com/png-clipart/20220705/ourmid/pngtree-illustration-of-delicious-yellow-montong-durian-fruit-with-nutritional-vitamins-png-image_5684249.png",
        },
        {
            fruitName: "Lychee",
            fruitColor: "Red",
            fruitPrice: 130000,
            image:
                "https://www.pngplay.com/wp-content/uploads/10/Lychee-Transparent-Image.png",
        },
    ];

    const handleLike = (index, fruitName) => {
        const updatedLikes = [...likedFruits];
        const isLiked = updatedLikes[index];
        updatedLikes[index] = !updatedLikes[index]; // Toggle like
        setLikedFruits(updatedLikes);

        const message = isLiked
            ? `Kamu batal menyukai buah ${fruitName}`
            : `Kamu menyukai buah ${fruitName}`;
        setLikeMessage(message);
        setIsLikeModalOpen(true);

        setTimeout(() => {
            setIsLikeModalOpen(false);
        }, 2000);
    };

    const handleInfoClick = (fruit) => {
        setSelectedFruit(fruit);
        setIsModalOpen(true);
    };

    const handleCommentClick = (fruit) => {
        setSelectedFruit(fruit);
        setIsCommentModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedFruit(null);
        setComment(""); 
        setCommentMessage(""); 
    };

    const handleCommentSubmit = () => {
        setCommentMessage(`Komentar telah dikirim: "${comment}"`);
        setComment("");
        setTimeout(() => {
            setCommentMessage("");
        }, 2000);
        setIsCommentModalOpen(false);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {fruits.map((fruit, index) => (
                    <div
                        key={index}
                        className="bg-pink-100 rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-white duration-300"
                    >
                        <img
                            src={fruit.image}
                            alt={fruit.fruitName}
                            className="w-24 h-24 object-cover mb-4 rounded-full transition-transform transform hover:rotate-6 duration-500 hover:animate-shake"
                        />
                        <h2 className="text-xl font-bold text-gray-800 capitalize">
                            {fruit.fruitName}
                        </h2>

                        <div className="flex justify-center mt-4 space-x-3">
                            <button
                                className="bg-white p-2 rounded-lg shadow-md hover:bg-pink-100 transition-all duration-300 transform hover:scale-110"
                                onClick={() => handleInfoClick(fruit)}
                            >
                                <Info className="w-6 h-6 text-black" />
                            </button>
                            <button
                                className={`bg-white p-2 rounded-lg shadow-md hover:bg-pink-100 transition-all duration-300 transform hover:scale-110`}
                                onClick={() =>
                                    handleLike(index, fruit.fruitName)
                                }
                            >
                                <Heart
                                    className={`w-6 h-6 transition-colors duration-300 ${
                                        likedFruits[index]
                                            ? "text-red-600"
                                            : "text-black"
                                    }`}
                                />
                            </button>
                            <button
                                className="bg-white p-2 rounded-lg shadow-md hover:bg-pink-100 transition-all duration-300 transform hover:scale-110"
                                onClick={() => handleCommentClick(fruit)}
                            >
                                <MessageCircle className="w-6 h-6 text-black" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Info Buah */}
            {isModalOpen && selectedFruit && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300">
                    <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative animate-slide-up">
                        <button
                            className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full"
                            onClick={closeModal}
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <h2 className="text-xl font-bold mb-4">
                            {selectedFruit.fruitName}
                        </h2>
                        <img
                            src={selectedFruit.image}
                            alt={selectedFruit.fruitName}
                            className="w-32 h-32 object-cover mx-auto mb-4 rounded-full"
                        />
                        <p className="text-gray-600">
                            <strong>Color:</strong> {selectedFruit.fruitColor}
                        </p>
                        <p className="text-gray-600">
                            <strong>Price:</strong> Rp{" "}
                            {selectedFruit.fruitPrice.toLocaleString()}
                        </p>
                        <button
                            className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-all duration-300"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Modal Komentar */}
            {isCommentModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300">
                    <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative animate-slide-up">
                        <button
                            className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full"
                            onClick={() => setIsCommentModalOpen(false)}
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <h2 className="text-xl font-bold mb-4">
                            Komentar untuk {selectedFruit.fruitName}
                        </h2>
                        <textarea
                            className="w-full h-24 p-2 border rounded-lg"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Tulis komentar..."
                        />
                        <button
                            className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-all duration-300"
                            onClick={handleCommentSubmit}
                        >
                            Kirim Komentar
                        </button>
                    </div>
                </div>
            )}

            {/* Modal Like/Unlike */}
            {isLikeModalOpen && (
                <div className="fixed bottom-10 right-10 z-50 bg-gray-800 text-white p-4 rounded-lg shadow-lg animate-bounce">
                    {likeMessage}
                </div>
            )}

            {/* Pesan Komentar */}
            {commentMessage && (
                <div className="fixed bottom-10 right-10 z-50 bg-gray-800 text-white p-4 rounded-lg shadow-lg animate-bounce">
                    {commentMessage}
                </div>
            )}
        </div>
    );
};

export default Content;
