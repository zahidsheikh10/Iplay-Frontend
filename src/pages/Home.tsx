import banner from '../assets/banner.jpg';
import StudentRegistrationForm from '../components/StudentRegistrationForm';
const Home = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="w-full">
                <img className="h-auto max-w-full" src={banner} alt="banner" />
            </div>
            <div className="w-full text-ellipsis text-center text-wrap text-3xl">
                Join our inaugural 2025 batch! Register now to secure your spot.
            </div>
            <div className="w-[300px] md:w-2/4 mx-auto">
                <StudentRegistrationForm />
            </div>
        </div>
    );
};

export default Home;
