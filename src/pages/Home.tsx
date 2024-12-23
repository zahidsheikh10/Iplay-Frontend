import banner from '../assets/banner.jpg';
const Home = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="w-full">
                <img className="h-auto max-w-full" src={banner} alt="banner" />
            </div>
        </div>
    );
};

export default Home;
