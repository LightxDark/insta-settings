import Image from "next/image";
import Button from '../components/Button';

export default function Custom404() {
    return (
        <div className=" text-center mt-4 top-0 text-lg font-semibold">
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist, and is likely still in construction!</p>
            <p>Check again later!</p>
            <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
                Go back home
            </a>
        </div>
    );
}