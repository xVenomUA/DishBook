
export default function Community() {   
    return <main>
        <h1 className="text-4xl font-bold text-center mt-10">Foodies Community</h1>
        <p className="text-center mt-4">
            Join our community and share your favorite recipes with other foodies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-white shadow-md rounded-md p-6">
                <h2 className="text-2xl font-bold">Breakfast</h2>
                <p className="mt-4">
                    Start your day with a delicious breakfast.
                </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
                <h2 className="text-2xl font-bold">Lunch</h2>
                <p className="mt-4">
                    Enjoy a tasty lunch.
                </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
                <h2 className="text-2xl font-bold">Dinner</h2>
                <p className="mt-4">
                    Finish your day with a delicious dinner.
                </p>
            </div>
        </div>
    </main>
}