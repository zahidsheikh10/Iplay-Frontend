import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const navigateTo = (page: string) => {
        navigate(`/${page}`);
    };

    return (
        <footer className="relative left-0 z-20 w-full bg-white rounded-lg shadow dark:bg-gray-900">
            <div className="w-full mx-auto max-w-full p-4 text-center md:text-left md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    © 2023 Iplay . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 justify-center">
                    <li>
                        <a
                            href="#"
                            className="hover:underline me-4 md:me-6"
                            onClick={() => navigateTo('')}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:underline me-4 md:me-6"
                            onClick={() => navigateTo('about')}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:underline"
                            onClick={() => navigateTo('contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
